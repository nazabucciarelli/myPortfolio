import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOtraSkillComponent } from './new-otra-skill.component';

describe('NewOtraSkillComponent', () => {
  let component: NewOtraSkillComponent;
  let fixture: ComponentFixture<NewOtraSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOtraSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOtraSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
