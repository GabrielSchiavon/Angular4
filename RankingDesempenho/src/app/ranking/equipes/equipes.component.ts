import { Component, OnInit } from '@angular/core';
import { EquipesService } from "../equipes.service";
import { Equipe } from "./equipes.model";

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  providers: [ EquipesService ],
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  private equipe: Equipe;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
