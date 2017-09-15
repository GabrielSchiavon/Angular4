export class Membro {
    private id: string;
    private fkidequipe: number; 
    private nome:string; 
    private cpf:number;
    private login: string;
    private senha: string;

    constructor () {
        this.login = "";
        this.senha = "";
    }
}