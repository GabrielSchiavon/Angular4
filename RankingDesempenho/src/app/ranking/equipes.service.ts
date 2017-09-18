import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EquipesService {

  errorHandler = error => console.error('EquipesService error', error);
  private baseUrl = 'https://ranking-de-desempenho.firebaseio.com/';
  private collection = 'equipes';

  constructor(private http: Http) { }

  addEquipe(equipe) {
    const json = JSON.stringify(equipe);
    console.log(json);
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

  removeEquipe(equipe) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${equipe.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateEquipe(equipe) {
    const json = JSON.stringify({equipe});
    return this.http.patch(`${this.baseUrl}/${this.collection}/${equipe.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    if (parsedResponse) {
      return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        membros: []
      }));
    }    
  }

}
