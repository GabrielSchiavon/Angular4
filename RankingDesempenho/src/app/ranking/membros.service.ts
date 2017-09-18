import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Membro} from "./membros/membro.model";

@Injectable()
export class MembrosService {

  errorHandler = error => console.error('MembroService error', error);
  private baseUrl = 'https://rankingdesempenho.firebaseio.com/';
  private collection = 'membros';

  constructor(private http: Http) { }

  addMembro(membro:Membro) {
    const json = JSON.stringify(membro);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getMembros() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeMembro(membro:Membro) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${membro.getId()}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateMembro(membro:Membro) {
    const json = JSON.stringify(membro); 
    return this.http.patch(`${this.baseUrl}/${this.collection}/${membro.getId()}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        fkidequipe: parsedResponse[id].fkidequipe,
        nome: parsedResponse[id].nome,
        cpf: parsedResponse[id].cpf,
        login: parsedResponse[id].login,
        senha: parsedResponse[id].senha
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

}