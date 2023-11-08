import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  constructor() {}
  ngOnInit() {
    this.personnes = [
      new Personne(
        1,
        'mahdi',
        'maalem',
        22,
        15,
        'rotating_card_profile2.png',
        'teacher'
      ),
      new Personne(
        2,
        'aymen',
        'selluti',
        35,
        15,
        'rotating_card_profile3.png',
        'teacher'
      ),
    ];
  }
}
