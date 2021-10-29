import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal as Animals } from './animal.model'; 

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  readonly _baseUrl = "https://localhost:5001/api/animals"

  formData: Animals = new Animals();
  list: Animals[] | undefined;

  postAnimals() { 
    return this.http.post(this._baseUrl, this.formData);
  }

  putAnimals() { 
    return this.http.put(this._baseUrl + "/" + this.formData.animalId, this.formData); 
  }

  deleteAnimals(id: string) {
    return this.http.delete(this._baseUrl + "/" + id);
  }

  refreshList() {
   this.http.get(this._baseUrl) 
      .toPromise() 
      .then(res => { 
        this.list = JSON.parse(JSON.stringify(res)).data as Animals[]
      });
  }
}
