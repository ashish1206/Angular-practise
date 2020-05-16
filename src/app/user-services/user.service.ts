import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from './../Models/Address'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  addAddress(address: Address): Observable<string>{
    const url = environment.userAddAddressAPIUrl;
    return this.http.post<string>(url, address, {headers:this.headers});

  }
}
