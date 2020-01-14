/**
 * The service is simply a feature that allows you to access its' 
 * defined properties and methods to then be injected into other
 * classes. This file also works with a design pattern observable
 * that configurates backend data
 */

import { Injectable } from '@angular/core'; // Decorator that participates in the dependency injection system
import { CLIENTS } from './clients.json';
import { Client } from './client';
import { Observable } from 'rxjs'; // Class that provides support for passing messages between publishers and subscribers
import { of } from 'rxjs'; // Method that converts a variable to an observable
import { HttpClient, HttpHeaders } from '@angular/common/http'; // class used to connect with the backend

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private urlEndpoint: string = 'http://localhost:8080/api/clients';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    // return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndpoint);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndpoint, client, {headers: this.httpHeaders});
  }
}
