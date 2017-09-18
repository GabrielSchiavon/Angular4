export class Membro {
    private id: string;
    private fkidequipe: number; 
    private nome:string; 
    private cpf:number;
    private login: string;
    private senha: string;

    constructor (id?: string, fkidequipe?: number, nome?:string, 
        cpf?:number, login?: string, senha?: string,) {
        
        if (id) {
            this.id = id;
            this.fkidequipe = fkidequipe;
            this.nome = nome;
            this.cpf = cpf;
            this.login = login;
            this.senha = senha;
        } else {
            this.login = "";
            this.senha = "";
        }
    }

    getId(){
        return this.id;
    }

    getFkidequipe(){
        return this.fkidequipe;
    }

    getNome(){
        return this.nome;
    }

    getCpf(){
        return this.cpf;
    }

    getLogin(){
        return this.login;
    }

    getSenha(){
        return this.senha;
    }
}