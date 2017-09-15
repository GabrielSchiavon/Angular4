import { Membro } from "../membros/membro.model";

export class Equipe {
    
    constructor (private id: string, private nome:string, private membros: Membro[]) {
        this.membros = [];
    }

}