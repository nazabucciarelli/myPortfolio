import { TestBed } from '@angular/core/testing';

import { BackSkillService } from './back-skill.service';

describe('BackSkillService', () => {
  let service: BackSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
