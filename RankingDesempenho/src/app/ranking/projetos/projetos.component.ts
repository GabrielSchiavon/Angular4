import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { ProjetosService } from '../projetos.service';
import { EquipesService } from "../equipes.service";

import { Projeto } from "./projeto.model";
import { Equipe } from "../equipes/equipes.model";



@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  campoNomenclatura: string;
  campoEquipe: Equipe;
  equipes: SelectItem[];
  projetos: Projeto[];
  equipesCadastradas: Equipe[];

  constructor(private projetoService: ProjetosService, private equipeService: EquipesService) {
    this.campoNomenclatura = "";
    this.equipes = [];
    this.carregarEquipesCadastradas();
    this.recarregarProjeto();
   }

  ngOnInit() {
    /* TODO:
        - exclusão de membros;
        - alteração de membros;
        - inserção no projeto ao adicionar membro;
    */
  }

  removerProjeto(projeto: Projeto) {
    this.projetos = this.projetos.filter(m => m != projeto);
  }

  cadastrarProjeto() {
    let projeto: Projeto = new Projeto("1",1,this.campoNomenclatura);
    this.projetoService.addProjeto(projeto)
    .then( () => this.recarregarProjeto() )
    .catch( () => console.log("Erro") );
  }

  recarregarProjeto() {
    return this.projetoService.getProjetos()
      .then( (projetos: Projeto[]) => this.projetos = projetos);
  }

  carregarEquipesCadastradas() {
    return this.equipeService.getEquipes()
      .then( (equipes:Equipe[]) => {
        if (typeof equipes !== undefined) {
          this.equipesCadastradas = equipes;
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
