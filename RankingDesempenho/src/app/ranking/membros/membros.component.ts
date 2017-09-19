import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

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
  campoEquipe: Equipe;
  equipes: SelectItem[];
  membros: Membro[];
  totalMembros: number;
  equipesCadastradas: Equipe[];

  alteracaoMembro: boolean;

  constructor(private membroService: MembrosService, private equipeService: EquipesService) {
    this.campoNome = "";
    this.campoCPF = "";
    this.campoLogin = "";
    this.campoSenha = "";
    this.equipes = [];
    this.alteracaoMembro = false;
    this.totalMembros = 0;
    this.carregarEquipesCadastradas();
    this.recarregarMembro();
  }

  ngOnInit() {
    /* TODO:
        - inserção no projeto ao adicionar membro;
    */
  }

  salvarMembro() {
    let membro: Membro = new Membro((this.totalMembros+1).toString(), Number(this.campoEquipe.id), this.campoNome, Number(this.campoCPF), this.campoLogin, this.campoSenha);
    if (this.alteracaoMembro) { //<-- alteração alteracao de membros
      console.log("entrou na alteração");
      this.membroService.updateMembro(membro)
        .then(() => {
          this.recarregarMembro();
          this.alteracaoMembro = false;
        })
        .catch(() => console.log("Erro"));
    } else {  //<-- inserção de novos membros
      console.log("entrou na cadastro");
      this.membroService.addMembro(membro)
        .then(() => {
          this.recarregarMembro();
          //this.inserirMembroEquipe(membro);
        })
        .catch(() => console.log("Erro"));
    }
    this.limpaCampos();
  }

  inserirMembroEquipe(membro: Membro) {
    this.campoEquipe.membros.push(membro);
    this.equipeService.updateEquipe(this.campoEquipe)
      .then(() => {
        this.carregarEquipesCadastradas();
      })
      .catch(() => console.log("Erro ao inserir membro na equipe"));
  }

  limpaCampos() {
    this.campoNome = "";
    this.campoCPF = "";
    this.campoLogin = "";
    this.campoSenha = "";
  }


  alterarMembro(membro: Membro) {
    this.alteracaoMembro = true;
    this.preencheCampos(membro);
  }

  private preencheCampos(membro: Membro) {
    this.campoNome = membro.nome;
    this.campoCPF = membro.cpf.toString();
    this.campoLogin = membro.login;
    this.campoSenha = membro.senha;
  }

  removerMembro(membro: Membro) {
    return this.membroService.removeMembro(membro)
      .then(() => this.recarregarMembro())
      .catch(() => console.log("Erro ao excluir membro"));
  }

  recarregarMembro() {
    return this.membroService.getMembros()
      .then((membros: Membro[]) => {
        this.membros = membros;
        this.totalMembros = this.membros.length;
      });
  }

  carregarEquipesCadastradas() {
    return this.equipeService.getEquipes()
      .then((equipes: Equipe[]) => {
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
    this.campoEquipe = equipes[0];
  }
}
