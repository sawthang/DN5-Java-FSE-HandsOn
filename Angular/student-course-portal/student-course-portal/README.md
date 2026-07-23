# Student Course Portal — Digital Nurture 5.0 Angular (v20.0) Hands-On Solutions

A single Angular 20 standalone-component application implementing all 10 hands-on
exercises from the Angular Hands-On Exercise Book. Each hands-on's concepts are
layered into this one project rather than split into separate projects.

## Setup

```bash
npm install
npm install -g json-server   # if not already installed
```

Run the mock backend (needed from Hands-On 8 onward):

```bash
json-server --watch db.json --port 3000
```

Run the app:

```bash
npm start        # ng serve -> http://localhost:4200
```

Run unit tests:

```bash
npm test         # ng test (Karma + Jasmine)
```

## Where each Hands-On lives

| Hands-On | Topic | Key files |
|---|---|---|
| 1 | Setup, project structure, first components | `notes.txt`, `angular.json`, `src/app/pages/home`, `components/header`, `pages/course-list`, `pages/student-profile` |
| 2 | Data binding, lifecycle hooks, @Input/@Output | `pages/home/home.component.*`, `components/course-card/*` |
| 3 | Directives & pipes | `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts`, `components/course-card/course-card.component.html` (ngClass/ngStyle/ngSwitch/*ngIf else) |
| 4 | Template-driven forms | `pages/enrollment-form/*` |
| 5 | Reactive forms, FormBuilder/FormArray, custom + async validators | `pages/reactive-enrollment-form/*` |
| 6 | Services & DI | `services/course.service.ts`, `services/enrollment.service.ts`, `services/notification.service.ts` (component-scoped), `components/notification/*` |
| 7 | Routing, guards, lazy loading | `app.routes.ts`, `guards/auth.guard.ts`, `guards/unsaved-changes.guard.ts`, `pages/courses-layout`, `pages/course-detail` |
| 8 | HttpClient, RxJS operators, interceptors | `services/course.service.ts`, `interceptors/*.ts`, `app.config.ts` |
| 9 | NgRx store, actions, reducers, effects, selectors | `store/course/*`, `store/enrollment/*` |
| 10 | Unit testing — Jasmine/Karma/TestBed | every `*.spec.ts` file, especially `components/course-card/course-card.component.spec.ts` and `pages/course-list/course-list.component.spec.ts` (MockStore) |

## Notes / deliberate deviations from the exact exercise wording

- The project uses **standalone components** throughout (Angular 20 default),
  so there is no `app.module.ts` — `app.config.ts` + `main.ts` play that role,
  and each component/pipe/directive declares its own `imports`.
- Hands-On 7's "feature module + `loadChildren`" lazy loading is implemented
  with the standalone equivalent, `loadComponent()`, which lazy-loads the
  `/enroll` and `/enroll-reactive` routes into separate chunks the same way.
- `CourseCardComponent`'s Enroll/Unenroll button is wired to the NgRx
  enrollment slice (Hands-On 9) rather than `EnrollmentService` directly, so
  the store is the single source of truth for enrollment state app-wide.
