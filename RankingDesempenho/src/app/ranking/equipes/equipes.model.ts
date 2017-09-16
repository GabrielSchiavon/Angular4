import { Membro } from "../membros/membro.model";

export class Equipe {
    id: string;
    nome:string;
    membros: Membro[];

    constructor (id?: string, nome?: string, membros?: Membro[]) {
        this.membros = [];
        if (id) {
            this.id = id;
            this.nome = nome;
            this.membros = membros;
        }
    }

}