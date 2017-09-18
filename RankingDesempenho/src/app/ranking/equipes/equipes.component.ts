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
  public campoNome: string = "";

  constructor(private equipeService: EquipesService) { 
    this.recarregarEquipe();
    this.campoNome = "";
  }

  ngOnInit() {
    /*
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
      .then( () => this.recarregarEquipe() )
      .catch( () => console.log("Erro") );
  }

  recarregarEquipe() {
    return this.equipeService.getEquipes()
      .then( (equipes:Equipe[]) => this.equipes = equipes);
  }
}
