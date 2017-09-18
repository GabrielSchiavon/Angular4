import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StepsModule, MenubarModule, ButtonModule, PanelModule, AccordionModule, InputTextModule, DropdownModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipesComponent } from "./ranking/equipes/equipes.component";
import { MembrosComponent } from "./ranking/membros/membros.component";
import { ProjetosComponent } from "./ranking/projetos/projetos.component";

import { EquipesService } from './ranking/equipes.service';
import { MembrosService } from './ranking/membros.service';
import { ProjetosService } from './ranking/projetos.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    MembrosComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StepsModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [
    EquipesService, 
    MembrosService, 
    ProjetosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
