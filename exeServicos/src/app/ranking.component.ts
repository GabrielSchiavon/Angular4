import { Component, Input, Output } from '@angular/core';
import { Membro } from './membro.model';

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

  title = 'Ranking';
  membro: Membro;
  equipe: Membro[];

  constructor() {
      this.equipe = [];
  }

  inserirDados() {
    this.membro = new Membro(this.nome, this.produtividade, this.pontos, this.bug, this.cleanCode, this.auxDev);
    this.equipe.push(this.membro);
  }
}
