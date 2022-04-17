import { TestBed } from '@angular/core/testing';

import { UserlistServiceService } from './userlist-service.service';

describe('UserlistServiceService', () => {
  let service: UserlistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
