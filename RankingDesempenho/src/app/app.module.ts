import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StepsModule, MenubarModule, ButtonModule, PanelModule, AccordionModule, InputTextModule, DropdownModule, SpinnerModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipesComponent } from "./ranking/equipes/equipes.component";
import { MembrosComponent } from "./ranking/membros/membros.component";
import { ProjetosComponent } from "./ranking/projetos/projetos.component";
import { ClassificacaoComponent } from "./ranking/classificacao/classificacao.component";

import { EquipesService } from './ranking/equipes.service';
import { MembrosService } from './ranking/membros.service';
import { ProjetosService } from './ranking/projetos.service';
import { LoginComponent } from './login/login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    MembrosComponent,
    ProjetosComponent,
    ClassificacaoComponent,
    LoginComponent
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
    SpinnerModule,
    AppRoutingModule
  ],
  providers: [
    EquipesService, 
    MembrosService, 
    ProjetosService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
