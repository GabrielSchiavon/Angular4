import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Equipe } from "../equipes/equipes.model";
import { Membro } from "./membro.model";

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
  campoNome: string;
  campoCPF: string;
  campoLogin: string;
  campoSenha: string;
  campoEquipe: string;
  equipes: SelectItem[];
  membros: Membro[];

  constructor() {
    this.campoNome = "";
    this.campoCPF = "";
    this.campoLogin = "";
    this.campoSenha = "";
    this.equipes = [{label: 'Equipe Web', value:1}];
    this.membros = [];
    this.membros.push(new Membro("1", this.equipes[0].value, "Jose", 999, "admin", "admin"));
   }

  ngOnInit() {
    /* TODO:
        - Buscar equipes no banco de dados e atribuir no array de equipes;
        - Buscar membros no banco de dados e atribuir no array de membros;
    */
    //this.equipes = buscarNoBanco();
    //this.membros = buscarNoBanco();
  }

  removerMembro(membro: Membro) {
    this.membros = this.membros.filter(m => m != membro);
  }

  cadastrarMembro() {
    let membro: Membro = new Membro((this.membros.length + 1).toString(), 1, this.campoNome, Number(this.campoCPF), this.campoLogin, this.campoSenha);
    this.membros.push(membro);
    console.log(this.membros);
  }
}
