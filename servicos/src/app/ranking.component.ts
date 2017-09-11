import { Component, Input, Output } from '@angular/core';
import { Membro } from './membro.model';
import { RankingService } from './ranking.service';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  nome: string;
  produtividade: number;
  pontos: number;
  bug: number;
  cleanCode: number;
  auxDev: number;
  total: number;

  title = 'Ranking';
  membro: Membro;
  equipe: Membro[];


  constructor(private rankingService: RankingService) {
    this.nome = "";
    this.produtividade = 0;
    this.pontos = 0;
    this.bug = 0;
    this.cleanCode = 0;
    this.auxDev = 0;
    this.total = 0;
    this.equipe = [];
  }

  ordenaLista(equipe: Membro[]) {
    equipe.sort((total1, total2) => {
      if (total1.total < total2.total) return 1;
      else return 0;
    });
  }

  limpaCampos() {
    this.nome = "";
    this.produtividade = 0;
    this.pontos = 0;
    this.bug = 0;
    this.cleanCode = 0;
    this.auxDev = 0;
    this.total = 0;
  }

  inserirMembro() {
    this.membro = new Membro(this.nome, this.produtividade, this.pontos, this.bug, this.cleanCode, this.auxDev);
    this.membro.total = this.rankingService.calculoTotal(this.membro);
    this.equipe.push(this.membro);
    this.ordenaLista(this.equipe);
    this.limpaCampos();
  }
}
