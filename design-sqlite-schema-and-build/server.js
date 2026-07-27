// Backend server for classroom app

const express = require('express');
const cors = require('cors');
const { database, initDB } = require('./src/db');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database
initDB();

// GET all students
app.get('/api/students', (req, res) => {
  const students = database.prepare('SELECT * FROM students').all();
  res.json(students);
});

// POST new student
app.post('/api/students', (req, res) => {
  const { name, email, phone } = req.body;
  const stmt = database.prepare('INSERT INTO students (name, email, phone) VALUES (?, , , ?)');
  const result = stmt.run(name, email, phone);
  res.json({ id: result.lastInsertRowid, name, email, phone });
});

// GET all classrooms
app.get('/api/classrooms', (req, res) => {
  const classrooms = database.prepare('SELECT * FROM classrooms').all();
  res.json(classrooms);
});

// POST new classroom
app.post('/api/classrooms', (req, res) => {
  const { name, capacity } = req.body;
  const stmt = database.prepare('INSERT INTO classrooms (name, capacity) VALUES (?, ?)');
  const result = stmt.run(name, capacity);
  res.json({ id: result.lastInsertRowid, name, capacity });
});

// GET all enrollments
app.get('/api/enrollments', (req, res) => {
  const enrollments = database.prepare('SELECT e.*, s.name as student_name, c.name as classroom_name FROM enrollments e JOIN students s ON e.student_id = s.id JOIN classrooms c ON e.classroom_id = c.id').all();
  res.json(enrollments);
});

// POST new enrollment
app.post('/api/enrollments', (req, res) => {
  const { student_id, classroom_id } = req.body;
  const stmt = database.prepare('INSERT INTO enrollments (student_id, classroom_id) VALUES (?, ?)');
  const result = stmt.run(student_id, classroom_id);
  res.json({ id: result.lastInsertRowid, student_id, classroom_id });
});

// DELETE enrollment
app.delete('/api/enrollments/:id', (req, res) => {
  const { id } = req.params;
  const stmt = database.prepare('DELETE FROM enrollments WHERE id = ?');
  stmt.run(id);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
