# QA Report: Classroom Management Application

<br>

### General Information

|              |                                                   |
| :--------------- | :------------------------------------------------------------- |
| Product           | Classroom Management System                                |
| Version          | 1.0                                                   |
| Test date        | 2026-07-27                                               |
| Tested by         | QA Team                                                 |
| Test environment  | Chrome 130, Node 22, SQLite                           |

<br>

### Tested Features

#### Student Self-Registration (FRONTEND)

* **Test 1: Form validation**       The form validates required fields (email and name) properly. Empty submission shows error.
___Pass : white_check_mark:___

* **Test 2: Successful registration**     Submitting the form with valid name, email and phone creates a new student record in the database.
___Pass : white_check_mark:___

* **Test 3: Duplicate email handling** duplicate email is
    An attempt to register with an existing email shows an error message.  ___Pass : white_check_mark:___

#### Teacher Backoffice SPA (FRONTEND)

* **Test 4: Classroom creation** The backoffice allows creating a new classroom with name and capacity.  
___Pass : white_check_mark:___

* **Test 5: Enrollment flow** Enrolling a student into a classroom creates an enrollment record.  ___Pass : white_check_mark:___

* **Test 6: Enrollment listing** The enrollment table shows student name and classroom name for each enrollment.
___Pass : white_check_mark:___

#### Backend API (BACKEND)

* **Test 7: GET /api/students** Empty array on cold boot; populated after registrations.___Pass : white_check_mark:___

* **Test 8: GET /api/classrooms** Empty array on cold boot; populated after creating a classroom.___Pass : white_check_mark:___

* **Test 9: POST /api/students - validation** Returns 400 when name or email is missing.___Pass : white_check_mark:___

#### Full User Journey (END-TO-END)

* **Test 10: Student registers → teacher creates classroom → teacher enrolls student in classroom** End-to-end flow works without errors.___Pass : white_check_mark:___

<br>

### Summary

|                            |             |
| :-----------------------------  | :-------------- |
| Total tests                   | 10            |
| Passed                         | 10            |
| Pass rate                     | 100%          |

The application passed all tests. It is ready for production deployment.