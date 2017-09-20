import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

import { Membro } from '../../ranking/membros/membro.model';
import { MembrosService } from '../../ranking/membros.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  campoUsuario: string;
  campoSenha: string;
  membros: Membro[];
  logado: Membro;

  constructor(private loginService: LoginService, private membroService: MembrosService) {
    this.campoUsuario = "";
    this.campoSenha = "";
    this.carregaMembros();
   }

  ngOnInit() {
  }

  carregaMembros() {
    return this.membroService.getMembros()
      .then( (arrayMembros: Membro[]) => this.membros = arrayMembros)
      .catch( () => console.log("Erro ao carregar membros!") );
  }

  verificarLogin() {
    if (this.campoUsuario != "" && this.campoSenha != "") {
      this.logado = this.loginService.verificaLogin(this.campoUsuario, this.campoSenha, this.membros);
      if (this.logado == null) {
        alert("Usuario/senha não conferem!");
      }
    }
  }

}
