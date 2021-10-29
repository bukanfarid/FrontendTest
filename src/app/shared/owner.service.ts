import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner as Owners } from './owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  readonly _baseUrl = "https://localhost:5001/api/owners"

  formData: Owners = new Owners();
  list: Owners[] | undefined;

  postOwner() { 
    return this.http.post(this._baseUrl, this.formData);
  }

  putOwner() { 
    return this.http.put(this._baseUrl + "/" + this.formData.OwnerId, this.formData); 
  }

  deleteOwner(id: string) {
    return this.http.delete(this._baseUrl + "/" + id);
  }

  refreshList() {
   this.http.get(this._baseUrl) 
      .toPromise() 
      .then(res => {  
        this.list = JSON.parse(JSON.stringify(res)).data as Owners[]
      });
  }
}
