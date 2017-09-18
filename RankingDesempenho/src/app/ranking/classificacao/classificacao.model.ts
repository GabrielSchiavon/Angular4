import { Projeto } from "../projetos/projeto.model";
import { Membro } from "../membros/membro.model";

export class Classificacao {
    id: string;
    produtividade:number;
    pontosEntregues:number;
    pontosBug: number;
    horasCleancode: number;
    horasAuxDev: number;
    horasTeste: number;

    constructor (id?: string, produtividade?: number, membrpontosEntreguesos?: number, pontosEntregues?: number, pontosBug?: number, horasCleancode?: number, horasAuxDev?: number, horasTeste?: number) {
        if (id) {
            this.id = id;
            this.produtividade = produtividade;
            this.pontosEntregues = pontosEntregues;
            this.pontosBug = pontosBug;
            this.horasCleancode = horasCleancode;
            this.horasAuxDev = horasAuxDev;
            this.horasTeste = horasTeste;
        }
    }

}









