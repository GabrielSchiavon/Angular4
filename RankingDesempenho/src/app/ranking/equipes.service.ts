import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Equipe} from "./equipes/equipes.model";

@Injectable()
export class EquipesService {

  errorHandler = error => console.error('EquipeService error', error);
  private baseUrl = 'https://rankingdesempenho.firebaseio.com/';
  private collection = 'equipes';

  constructor(private http: Http) { }

  addEquipe(equipe:Equipe) {
    const json = equipe.stringify();
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getEquipes() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeEquipe(equipe:Equipe) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${equipe.getId()}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateEquipe(equipe:Equipe) {
    const json = equipe.stringify(); 
    return this.http.patch(`${this.baseUrl}/${this.collection}/${equipe.getId()}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

}