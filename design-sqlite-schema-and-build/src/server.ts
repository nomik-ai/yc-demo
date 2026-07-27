import express, { Request, Response } from 'express';
import cors from 'cors';
import { database, initDB } from './db';

const app = express();
app.use(cors());
app.use(express.json());

initDB();

// Get all students
app.get('/api/students', (_req: Request, res: Response) => {
  const students = database.prepare('SELECT * FROM students').all();
  res.json(students);
});

// Create a student
app.post('/api/students', (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }
  const stmt = database.prepare('INSERT INTO students (name, email, phone) VALUES (?, ?, ?)');
  const result = stmt.run(name, email, phone || null);
  res.status(201).json({ id: result.lastInsertRowid, name, email, phone });
});

// Get all classrooms
app.get('/api/classrooms', (_req: Request, res: Response) => {
  const classrooms = database.prepare('SELECT * FROM classrooms').all();
  res.json(classrooms);
});

// Create a classroom
app.post('/api/classrooms', (req: Request, res: Response) => {
  const { name, capacity } = req.body;
  if (!name || !capacity) {
    res.status(400).json({ error: 'Name and capacity are required' });
    return;
  }
  const stmt = database.prepare('INSERT INTO classrooms (name, capacity) VALUES (?, ?)');
  const result = stmt.run(name, capacity);
  res.status(201).json({ id: result.lastInsertRowid, name, capacity });
});

// Get all enrollments
app.get('/api/enrollments', (_req: Request, res: Response) => {
  const enrollments = database.prepare('SELECT e.*, s.name as student_name, c.name as classroom_name FROM enrollments e JOIN students s ON e.student_id = s.id JOIN classrooms c ON e.classroom_id = c.id').all();
  res.json(enrollments);
});

// Create an enrollment
app.post('/api/enrollments', (req: Request, res: Response) => {
  const { student_id, classroom_id } = req.body;
  if (!student_id || !classroom_id) {
    res.status(400).json({ error: 'student_id and classroom_id are required' });
    return;
  }
  const stmt = database.prepare('INSERT INTO enrollments (student_id, classroom_id) VALUES (?, ?)');
  const result = stmt.run(student_id, classroom_id);
  res.status(201).json({ id: result.lastInsertRowid, student_id, classroom_id });
});

// Delete an enrollment
app.delete('/api/enrollments/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const stmt = database.prepare('DELETE FROM enrollments WHERE id = ?');
  stmt.run(id);
  res.json({ ok: true });
});

const PORT = Number(process.env.PORT) || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
