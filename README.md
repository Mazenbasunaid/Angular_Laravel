# Dental Clinic — Full-Stack Auth Demo (Angular + Laravel)

A full-stack demo application with user registration, login, and session-based
API authentication, built as an Angular single-page frontend backed by a
Laravel REST API. Originally built in 2021 as university coursework and
modernized in 2026 to run on current, actively supported versions of both
frameworks.

## Stack

**Frontend** — `Angular/`
- Angular 22, using standalone components and the esbuild-based application builder (no `NgModule`, no webpack)
- Bootstrap 4 for styling
- RxJS, Reactive Forms

**Backend** — `Laravel/`
- Laravel 12
- Laravel Sanctum 4 for SPA authentication
- MySQL

## Features

- User registration and login
- Sanctum-authenticated `GET /api/user` endpoint
- Logout
- Angular route guards for authenticated/unauthenticated views

## Project structure

```
Angular_Laravel/
├── Angular/    # Frontend SPA
└── Laravel/    # Backend REST API
```

## Getting started

### Backend (Laravel)

```bash
cd Laravel
composer install
cp .env.example .env
php artisan key:generate
# set DB_DATABASE / DB_USERNAME / DB_PASSWORD in .env, then:
php artisan migrate --seed
php artisan serve
```

The API will be available at `http://127.0.0.1:8000`. A `GET /up` health-check
route is included by default.

### Frontend (Angular)

```bash
cd Angular
npm install
npm start
```

The app will be available at `http://localhost:4200`.

## Modernization notes

This project was upgraded from its original 2021 stack (Angular 11 /
NgModules, Laravel 9) to Angular 22 (standalone components, `@if`/`@for`
control flow, the esbuild application builder) and Laravel 12 (the
`bootstrap/app.php`-based application structure, consolidated middleware and
service providers). Functionality is unchanged from the original — the
upgrade was purely about running on a current, supported toolchain.

## License

MIT — see [LICENSE](LICENSE).
