export class Projeto {
    private id: string;
    private fkidequipe: number; 
    private nomenclatura:string; 

    constructor (id?: string, fkidequipe?: number, nomenclatura?:string) {
        this.id = id;
        this.fkidequipe = fkidequipe;
        this.nomenclatura = nomenclatura;
    }

    getId(){
        return this.id;
    }

    getFkidequipe(){
        return this.fkidequipe;
    }

    getNomenclatura(){
        return this.nomenclatura;
    }
}