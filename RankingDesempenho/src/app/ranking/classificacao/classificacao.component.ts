import { Component, OnInit } from '@angular/core';

import { ProjetosService } from "../projetos.service";
import { MembrosService } from "../membros.service";
import { EquipesService } from "../equipes.service";

import { Projeto } from "../projetos/projeto.model";
import { Equipe } from "../equipes/equipes.model";
import { Membro } from "../membros/membro.model";
import { SelectItem } from "primeng/primeng";

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {
  equipes: Equipe[];
  membros: Membro[];
  projetos: Projeto[];

  projetosSelect: SelectItem[];
  equipesSelect: SelectItem[];
  membrosSelect: SelectItem[];

  campoProjeto: Projeto;
  campoEquioe: Equipe;
  campoMembro: Membro;

  campoProdutividade: Number;
  campoPontos: Number;
  campoBug: Number;
  campoCleanCode: Number;
  campoAuxDev: Number;


  constructor(private projetosService: ProjetosService, private membrosService: MembrosService,
    private equipesService: EquipesService) {
      this.campoProdutividade = 0;
      this.campoPontos = 0;
      this.campoBug = 0;
      this.campoCleanCode = 0;
      this.campoAuxDev = 0;
      this.projetosSelect = [];
      this.recarregaProjetos();
     }

  ngOnInit() {
  }

  recarregaProjetos() {
    return this.projetosService.getProjetos()
      .then( (projetos: Projeto[]) => {
        this.projetos = projetos;
        this.preencheListaProjetos(this.projetos);
      } );
  }

  preencheListaProjetos(projetos: Projeto[]) {
    for (let p of projetos) {
      this.projetosSelect.push(
        { label: p.nomenclatura, value: p }
      );
    }
    this.campoProjeto = projetos[0];
  }
}
