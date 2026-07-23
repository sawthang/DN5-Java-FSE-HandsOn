// src/app/components/notification/notification.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  // Component-level provider: creates a NEW NotificationService instance
  // scoped only to this component (and its children) rather than reusing
  // the app-wide singleton pattern used by CourseService/EnrollmentService.
  providers: [NotificationService],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}

  addSample(): void {
    this.notificationService.notify('You have a new course update.');
  }
}
