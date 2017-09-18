import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MembrosService {

  errorHandler = error => console.error('MembrosService error', error);
  private baseUrl = 'https://ranking-de-desempenho.firebaseio.com/';
  private collection = 'membros';

  constructor(private http: Http) { }

  addMembro(membro) {
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

  removeMembro(membro) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${membro.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateMembro(membro) {
    const json = JSON.stringify(membro);
    return this.http.patch(`${this.baseUrl}/${this.collection}/${membro.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    if (parsedResponse) {
      return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        fkidequipe: parsedResponse[id].fkidequipe,
        cpf: parsedResponse[id].cpf,
        login: parsedResponse[id].login,
        senha: parsedResponse[id].senha
      }));
    }    
  }
}
