import Database, { Statement } from 'better-sqlite3';
import path from 'path';

export const database = new Database(path.resolve(__dirname, '../classroom.db'));

database.pragma('journal_mode = WAL');

export function initDB() {
  database.exec(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE,
      phone TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  database.exec(`
    CREATE TABLE IF NOT EXISTS classrooms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      capacity INTEGER NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  database.exec(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL REFERENCES students(id),
      classroom_id INTEGER NOT NULL REFERENCES classrooms(id),
      enrolled_at TEXT DEFAULT CURRENT_TIMESTAMP	
    );
  `);
}
