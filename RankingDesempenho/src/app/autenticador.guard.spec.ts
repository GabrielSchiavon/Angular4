import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticadorGuard } from './autenticador.guard';

describe('AutenticadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticadorGuard]
    });
  });

  it('should ...', inject([AutenticadorGuard], (guard: AutenticadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
