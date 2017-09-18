import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { MembrosService } from '../membros.service';
import { EquipesService } from "../equipes.service";

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
  equipesCadastradas: Equipe[];

  constructor(private membroService: MembrosService, private equipeService: EquipesService) {
    this.campoNome = "";
    this.campoCPF = "";
    this.campoLogin = "";
    this.campoSenha = "";
    this.equipes = [];
    this.carregarEquipesCadastradas();
    this.recarregarMembro()
    //this.membros.push(new Membro("1", this.equipes[0].value, "Jose", 999, "admin", "admin"));
   }

  ngOnInit() {
    /* TODO:
        - exclusão de membros;
        - alteração de membros;
        - inserção no projeto ao adicionar membro;
    */
  }

  removerMembro(membro: Membro) {
    this.membros = this.membros.filter(m => m != membro);
  }

  cadastrarMembro() {
    let membro: Membro = new Membro("1", 1, this.campoNome, Number(this.campoCPF), this.campoLogin, this.campoSenha);
    this.membroService.addMembro(membro)
    .then( () => this.recarregarMembro() )
    .catch( () => console.log("Erro") );
  }

  recarregarMembro() {
    return this.membroService.getMembros()
      .then( (membros: Membro[]) => this.membros = membros);
  }

  carregarEquipesCadastradas() {
    return this.equipeService.getEquipes()
      .then( (equipes:Equipe[]) => {
        if (typeof equipes !== undefined) {
          this.equipesCadastradas = equipes;
          console.log(this.equipesCadastradas);
          this.preencheListaEquipes(this.equipesCadastradas);
        }
      });
  }

  preencheListaEquipes(equipes: Equipe[]) {
    for (let e of equipes) {
      this.equipes.push(
        { label: e.nome, value: e }
      );
    }
  }
}
