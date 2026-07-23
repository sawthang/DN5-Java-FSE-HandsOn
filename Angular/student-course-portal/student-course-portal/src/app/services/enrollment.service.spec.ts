import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EnrollmentService } from './enrollment.service';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrollmentService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enroll and unenroll a course id', () => {
    service.enroll(1);
    expect(service.isEnrolled(1)).toBeTrue();
    service.unenroll(1);
    expect(service.isEnrolled(1)).toBeFalse();
  });

  it('should not duplicate an id already enrolled', () => {
    service.enroll(5);
    service.enroll(5);
    expect(service.isEnrolled(5)).toBeTrue();
  });
});
