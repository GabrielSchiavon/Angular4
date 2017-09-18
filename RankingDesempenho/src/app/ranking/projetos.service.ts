import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Projeto} from "./projetos/projeto.model";

@Injectable()
export class ProjetosService {

  errorHandler = error => console.error('ProjetoService error', error);
  private baseUrl = 'https://rankingdesempenho.firebaseio.com/';
  private collection = 'projetos';

  constructor(private http: Http) { }

  addProjeto(projeto:Projeto) {
    const json = JSON.stringify(projeto);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getProjetos() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeProjeto(projeto:Projeto) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${projeto.getId()}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateProjeto(projeto:Projeto) {
    const json = JSON.stringify(projeto); 
    return this.http.patch(`${this.baseUrl}/${this.collection}/${projeto.getId()}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        fkidequipe: parsedResponse[id].fkidequipe,
        nomenclatura: parsedResponse[id].nomenclatura
      }))
      .sort((a, b) => a.nomenclatura.localeCompare(b.nomenclatura));
  }

}