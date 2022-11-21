import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtraSkillComponent } from './edit-otra-skill.component';

describe('EditOtraSkillComponent', () => {
  let component: EditOtraSkillComponent;
  let fixture: ComponentFixture<EditOtraSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOtraSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOtraSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
