import { TestBed, inject } from '@angular/core/testing';

import { MembrosService } from './membros.service';

describe('MembrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembrosService]
    });
  });

  it('should be created', inject([MembrosService], (service: MembrosService) => {
    expect(service).toBeTruthy();
  }));
});
