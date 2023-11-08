import { Component, Input } from '@angular/core';
import { Personne } from '../../Model/Personne';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  name: string = '';
  firstname: string = '';
  @Input() personne: Personne = new Personne(); // Replace 'any' with your specific data type

  constructor() {}
}
