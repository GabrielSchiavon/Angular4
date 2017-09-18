export class Membro {
    id: string;
    fkidequipe: number; 
    nome:string; 
    cpf:number;
    login: string;
    senha: string;

    constructor (id?: string, fkidequipe?: number, nome?:string, 
        cpf?:number, login?: string, senha?: string,) {
        
        if (id) {
            this.id = id;
            this.fkidequipe = fkidequipe;
            this.nome = nome;
            this.cpf = cpf;
            this.login = login;
            this.senha = senha;
        }
    }
}