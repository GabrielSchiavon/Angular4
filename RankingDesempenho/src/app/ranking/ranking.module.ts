import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { EquipesComponent } from './equipes/equipes.component';
import { MembrosComponent } from './membros/membros.component';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  imports: [
    CommonModule,
    RankingRoutingModule
  ],
  declarations: [EquipesComponent, MembrosComponent, ProjetosComponent]
})
export class RankingModule { }
