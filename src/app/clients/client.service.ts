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

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
