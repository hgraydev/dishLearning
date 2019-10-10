import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCourseComponent } from './recent-course.component';

describe('RecentCourseComponent', () => {
  let component: RecentCourseComponent;
  let fixture: ComponentFixture<RecentCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
