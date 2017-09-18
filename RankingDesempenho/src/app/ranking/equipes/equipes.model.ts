import { Membro } from "../membros/membro.model";

export class Equipe {
    
    constructor (private id: string, private nome:string, private membros: Membro[]) {
        this.membros = [];
    }

    stringify(){
        return `{id:${this.id},nome:${this.nome}}`;
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    getMembros(){
        return this.membros;
    }


}
