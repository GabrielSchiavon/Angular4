export class Membro {
    total: number;

    constructor(public nome: string, public prod: number, public pontos: number, 
        public bug: number, public cleanCode: number, public auxDev: number) {
        
            this.total = 0;
    }
}