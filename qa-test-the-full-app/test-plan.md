# Test Plan: Classroom Management Application

### 1 Purpose

This test plan validates the full Classroom Management Application -
 from the student self-registration frontend through the backend storage, and the teacher backoffice.

### 2 Test scope

* Student self-registration frontend (React)
* Teacher backoffice SPA (React)
* Backend API (Express + SQLite)
* Full end-to-end user journey

### 3 Test Environment

* OS: macOS 14.6
* Browser: Chrome 130
* Backend: Node 22 + SQLite

### 4 Test Cases

#### Student Self-registration (frontend)

1. **Test 1: Form validation**    The form validates required fields (email and name) properly.
    Submit an empty form & receive error messages.

2. **Test 2: Successful registration**     Submit a form with valid name, email and phone. A student record should be created in the database.

3. **Test 3: Duplicate email handling** duplicate email
Try to register with an existing email. An error message should appear.

#### Teacher Backoffice SPA (frontend)

4. **Test 4: Classroom creation** The backoffice allows creating a new classroom with name and capacity.

5. **Test 5: Enrollment flow** Enrolling a student into a classroom creates an enrollment record.

6. **Test 6: Enrollment listing** The enrollment table shows student name and classroom name for each enrollment.

#### Backend API

7. **Test 7: *`GET /api/students`* Empty array on cold boot. After registrations, it should return the students.

8. **Test 8: *`GET /api/classrooms`** Empty array on cold boot. After creating a classroom, it should return the classrooms.

9. **Test 9: `POST /api/students` validation** When name or email is missing, the API should return 400.

#### Full End-to-End User Journey

10. **Test 10: Full user journey** Student registers   → teacher creates classroom   → teacher enrolls student in classroom. The end to end flow works without error.