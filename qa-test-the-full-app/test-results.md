# Test Results

### Environment

* Backend: Express 4.21 + SQLite
* Frontends: React + Vite
* Browser: Chrome 130

### Results

| # | Test                                     | Status | Notes                           |
|  : | :------------------------------------------ | :white_check_mark:| :--------------------------------- |
| 1 | Frontend form validation                 | PASS   | Error messages displayed on empty submission  |
| 2 | Student registration                      | PASS   | Student record created in DB          |
| 3 | Duplicate email handling                | PASS   | Error shown for duplicate email         |
| 4 | Classroom creation                       | PASS   | Classroom created in DB                |
| 5 | Enrollment flow                           | PASS   | Enrollment record link built           |
| 6 | Enrollment table display                  | PASS   | Displayed that student X is in class Y|
| 7 | *`GET /api/students` (empty DB)            | PASS   | []                                    |
| 8 | `GET /api/classrooms` (empty DB)            | PASS   | []                                    |
| 9 | `POST /api/students` validation            | PASS   | 400 returned on missing fields         |
| 10 | Full end-to-end journey                   | PASS   | No errors - end to end worked        |

**Overall: 10/10 passed   100%**