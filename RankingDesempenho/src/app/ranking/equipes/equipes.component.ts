import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { EquipesService } from "../equipes.service";
import { MembrosService } from "../membros.service";

import { Equipe } from "./equipes.model";
import { Membro } from "../membros/membro.model";

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  providers: [EquipesService],
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  public membros: Membro[];
  public equipes: Equipe[];
  public campoNome: string = "";
  membrosEquipe: Membro[];
  totalEquipes: number;

  constructor(private equipeService: EquipesService, private membroService: MembrosService) {
    this.totalEquipes = 0;
    this.recarregarEquipe();
    this.campoNome = "";
  }

  ngOnInit() {
    /*
      - Realizar a persistencia de membrosEquipes
      - exclusão de equipes;
      - alteração de equipes;
      - inserção de membro na equipe;
    */
  }

  removerMembro(equipe: Equipe, membro: Membro) {
    membro.fkidequipe = 0;
    this.membroService.updateMembro(membro)
      .then( () => this.recarregarMembros())
      .catch( () => console.log("Erro ao excluir membro da equipe"));
    //equipe.membros = equipe.membros.filter(m => m != membro);
  }

  cadastrarEquipe() {
    let equipe: Equipe = new Equipe(this.totalEquipes.toString(), this.campoNome, []);
    this.equipeService.addEquipe(equipe)
      .then(() => this.recarregarEquipe())
      .catch(() => console.log("Erro"));
  }

  recarregarEquipe() {
    return this.equipeService.getEquipes()
      .then((equipes: Equipe[]) => {
        this.equipes = equipes;
        this.recarregarMembros();
        this.totalEquipes = this.equipes.length;
      });
  }

  recarregarMembros() {
    return this.membroService.getMembros()
      .then((membros: Membro[]) => {
        this.membros = membros;
        //this.recarregarEquipesMembros();
      });
  }
}
