import { Membro } from './membro.model';

const totalcaracteristicas = 5;

export class RankingService {
    pesoProd: number;
    pesoPontos: number;
    pesoBug: number;
    pesoCleanCode: number;
    pesoAuxDev: number;
    
    constructor() {
        this.pesoProd = 1.3;
        this.pesoPontos = 1.4;
        this.pesoBug = 1.2;
        this.pesoCleanCode = 1.1;
        this.pesoAuxDev = 1.2;
    }

    calculoTotal(membro: Membro): number {
        let total: number = 0;
        total = membro.prod * this.pesoProd;
        total += membro.pontos * this.pesoPontos;
        total += membro.bug * this.pesoBug;
        total += membro.cleanCode * this.pesoCleanCode;
        total += membro.auxDev * this.pesoAuxDev;
        total = total / totalcaracteristicas;
        return total;
    }

}