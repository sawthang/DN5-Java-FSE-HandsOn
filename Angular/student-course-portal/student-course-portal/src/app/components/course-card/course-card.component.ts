// src/app/components/course-card/course-card.component.ts
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isEnrolled$ = this.store
      .select(selectEnrolledIds)
      .pipe(map((ids) => ids.includes(this.course.id)));
  }

  // Fires whenever an @Input() reference changes (e.g. a new course object is passed in).
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': false, // toggled via store-driven isEnrolled$ in the template
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(enrolled: boolean): void {
    if (enrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
    this.enrollRequested.emit(this.course.id);
  }
}
