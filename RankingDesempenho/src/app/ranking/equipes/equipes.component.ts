import { Component, OnInit } from '@angular/core';
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
  equipeMembro: any[];

  constructor(private equipeService: EquipesService, private membroService: MembrosService) {
    this.equipeMembro = [];
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
    equipe.membros = equipe.membros.filter(m => m != membro);
  }

  cadastrarEquipe() {
    let equipe: Equipe = new Equipe("1", this.campoNome, []);
    this.equipeService.addEquipe(equipe)
      .then(() => this.recarregarEquipe())
      .catch(() => console.log("Erro"));
  }

  recarregarEquipe() {
    return this.equipeService.getEquipes()
      .then((equipes: Equipe[]) => {
        this.equipes = equipes;
        this.recarregarMembros();
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
