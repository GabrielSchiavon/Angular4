export class Projeto {
    public id: string;
    public fkidequipe: number; 
    public nomenclatura:string; 

    constructor (id?: string, fkidequipe?: number, nomenclatura?:string) {
        this.id = id;
        this.fkidequipe = fkidequipe;
        this.nomenclatura = nomenclatura;
    }

}