import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsAndProjectsComponent } from './certifications-and-projects.component';

describe('CertificationsAndProjectsComponent', () => {
  let component: CertificationsAndProjectsComponent;
  let fixture: ComponentFixture<CertificationsAndProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationsAndProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
