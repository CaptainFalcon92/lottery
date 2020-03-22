import { Injectable } from '@angular/core';
import { Participant } from './participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private allParticipant: Participant[] = [];

  constructor() {}

  setParticpant(participant: Participant) {
    this.allParticipant.push(participant)
  }
  getAParticipant(id: number) {
    return this.allParticipant[id];
  }
  getAllParticipant() {
    return this.allParticipant;
  }
  deleteAParticipant(id: number) {
    this.allParticipant.splice(id, 1);
  }
  updateAParticipant(id: number, name: string, nbTicket: number) {
    this.allParticipant[id].name = name;
    this.allParticipant[id].nbTicket = nbTicket;
  }
  getNumberOfTicket() {
    let count = 0;
    this.allParticipant.forEach((e) => {
      count += e.nbTicket;
    });
    return count.toString();
  }

}
