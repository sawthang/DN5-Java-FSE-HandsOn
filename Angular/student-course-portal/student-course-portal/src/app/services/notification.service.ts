// src/app/services/notification.service.ts
// NOTE: This service is intentionally NOT providedIn: 'root'.
// It is provided at the component level (see NotificationComponent's
// `providers: [NotificationService]`), which creates a new, isolated
// instance scoped to that component and its children — useful when each
// instance needs its own separate state rather than sharing app-wide state.
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private messages: string[] = [];

  notify(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
