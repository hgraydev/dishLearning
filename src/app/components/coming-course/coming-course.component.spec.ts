import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingCourseComponent } from './coming-course.component';

describe('ComingCourseComponent', () => {
  let component: ComingCourseComponent;
  let fixture: ComponentFixture<ComingCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
