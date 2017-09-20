import { Injectable } from '@angular/core';

import { Membro } from '../ranking/membros/membro.model';

@Injectable()
export class LoginService {

  constructor() { 

  }

  verificaLogin(usuario: string, senha:string, membros: Membro[]): Membro {
    for (let m of membros) {
      if (m.login == usuario && m.senha == senha) {
        return m;
      }
    }
    return null;
  }

}
