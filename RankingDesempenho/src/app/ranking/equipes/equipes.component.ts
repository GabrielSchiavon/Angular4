import { Component, OnInit } from '@angular/core';
import { EquipesService } from "../equipes.service";
import { Equipe } from "./equipes.model";
import { Membro } from "../membros/membro.model";

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  providers: [ EquipesService ],
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  public equipes: Equipe[];
  public e: Equipe = new Equipe("1", "Equipe Web", []);
  public m: Membro = new Membro("1", 1, "Membro de Teste", 9, "admin", "admin");
  public campoNome: string = "";  
  constructor() { 
    this.equipes = [];
    this.campoNome = "";
    this.e.membros.push(this.m);
    this.equipes.push(this.e);
  }

  ngOnInit() {
  }

  removerMembro(equipe: Equipe, membro: Membro) {
    equipe.membros = equipe.membros.filter(m => m != membro);
  }

  cadastrarEquipe() {
    let equipe: Equipe = new Equipe((this.equipes.length+1).toString(), this.campoNome, []);
    this.equipes.push(equipe);
    console.log(this.equipes);
  }

}
