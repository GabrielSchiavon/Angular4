import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipesComponent } from './ranking/equipes/equipes.component';
import { MembrosComponent } from './ranking/membros/membros.component';
import { ProjetosComponent } from './ranking/projetos/projetos.component';
import { LoginComponent } from './login/login/login.component';
import { ClassificacaoComponent } from './ranking/classificacao/classificacao.component';

const routes: Routes = [
  {path: 'equipe', component: EquipesComponent},
  {path: 'membro', component: MembrosComponent},
  {path: 'projeto', component: ProjetosComponent},
  {path: 'classificacao', component: ClassificacaoComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
