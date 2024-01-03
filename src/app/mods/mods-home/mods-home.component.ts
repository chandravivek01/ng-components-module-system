import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  modalOpen = false;

  items = [
    {
      title: 'who am I?' , content: 'Part and parcel of the Supreme.'
    },
    {
      title: 'Goal of human life' , content: 'To know about God and rendering devotional service to God'
    }
  ];

  modalHandler() {
    this.modalOpen = !this.modalOpen;
  }
}
