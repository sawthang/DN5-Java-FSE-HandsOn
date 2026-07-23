// src/main.ts
// Application entry point — bootstraps the root standalone AppComponent
// directly (Angular 17+ standalone API, continued in Angular 20).
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
