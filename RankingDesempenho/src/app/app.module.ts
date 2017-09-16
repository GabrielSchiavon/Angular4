import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StepsModule, MenubarModule, ButtonModule, PanelModule, AccordionModule, InputTextModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipesComponent } from "./ranking/equipes/equipes.component";
import { MembrosComponent } from "./ranking/membros/membros.component";
import { ProjetosComponent } from "./ranking/projetos/projetos.component";

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
    StepsModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
