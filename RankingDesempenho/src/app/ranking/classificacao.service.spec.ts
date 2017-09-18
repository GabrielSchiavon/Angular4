import { TestBed, inject } from '@angular/core/testing';

import { ClassificacaoService } from './classificacao.service';

describe('ClassificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassificacaoService]
    });
  });

  it('should be created', inject([ClassificacaoService], (service: ClassificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
