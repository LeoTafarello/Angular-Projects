import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

  tickets: Ticket[] = [];

  onAdd(ticketData: {title:string; text:string}){

    const ticket : Ticket = {
      title:ticketData.title,
      request:ticketData.text,
      id: Math.random().toString(), //criando desse jeito so para teste, pois podemos ter o mesmo ID e isso é errado.
      status: 'open'
    }
    this.tickets.push(ticket);
  }

  onCloseTicket(id:string){   //mudando o status quando chamar a função onCloseTicket
    this.tickets = this.tickets.map((ticket)=> {
      if(ticket.id ===id){
        return{...ticket,status:'closed'}
      }
      return ticket;
    });
  }
}
