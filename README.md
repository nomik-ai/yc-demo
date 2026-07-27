# Classroom Management Web App

A two-part classroom management application: a teacher backoffice for managing students, courses, and accounts, plus a student self-registration portal — sharing one REST API backend with SQLite.

## How it works

- **Students** visit the registration portal (port 5174), sign up, and get a dashboard.
- **Teachers/admins** use the backoffice (port 5173) to manage students, create course slots, and handle accounts.
- **Backend** (port 3001) provides a REST API backed by SQLite, serving both frontends.

```
├──────────────────────┐    ┌─────────────────────┐
│   Teacher SPA       │    │   Student SPA        │
│   (port 5173)       │    │   (port 5174)        │
└────────┬────────────┘    └──────────┬───────────┘
         │                              │
         └───────────┬───────────────┘
                     │
            ┌────────▼────────┐
            │   REST API       │
            │   (port 3001)    │
            │   Express+SQLite │
            └─────────────────┘