import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveEnrollmentFormComponent, noCourseCode } from './reactive-enrollment-form.component';
import { FormControl } from '@angular/forms';

describe('ReactiveEnrollmentFormComponent', () => {
  let component: ReactiveEnrollmentFormComponent;
  let fixture: ComponentFixture<ReactiveEnrollmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEnrollmentFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should flag course codes starting with XX via the custom validator', () => {
    const control = new FormControl('XX101');
    expect(noCourseCode(control)).toEqual({ noCourseCode: true });
  });

  it('should allow course codes not starting with XX', () => {
    const control = new FormControl('CS101');
    expect(noCourseCode(control)).toBeNull();
  });

  it('should add and remove additional course controls', () => {
    component.addCourse();
    expect(component.additionalCourses.length).toBe(1);
    component.removeCourse(0);
    expect(component.additionalCourses.length).toBe(0);
  });

  it('canDeactivate should return true when the form is pristine', () => {
    expect(component.canDeactivate()).toBeTrue();
  });
});
