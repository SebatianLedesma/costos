import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = [
    { name: 'Bananas', cost: '$400' },
    { name: 'Manzanas', cost: '$550' },
    { name: 'Naranjas', cost: '$350' },
    { name: 'Peras', cost: '$280' },
    { name: 'Kiwwis', cost: '$970' },
    { name: 'Pomelos', cost: '$390' },
    { name: 'Frutillas', cost: '$1120' },
  ];
}

