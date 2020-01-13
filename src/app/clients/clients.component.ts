import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  /**
   * This method handles any aditional tasks after Angular initializes
   */
  ngOnInit() {
    this.clientService.getClients().subscribe( // subscribe is a method that executes and updates the observable
      clients => {
        console.log(clients);
        return this.clients = clients // anonymous function
      }
    );
  }

}
