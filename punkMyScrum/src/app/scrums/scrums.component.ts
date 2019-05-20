// angular
import { Component, OnInit } from '@angular/core';

// app
import { Scrum } from '../models/scrum';

@Component({
  selector: 'app-scrums',
  templateUrl: './scrums.component.html',
  styleUrls: ['./scrums.component.css']
})
export class ScrumsComponent implements OnInit {

  scrums: Array<Scrum>;

  constructor() { }

  ngOnInit() {
    this.scrums = this.getScrums();
  }

  private getScrums(): Array<Scrum> {
    return [
      new Scrum('fsa', '602-555-1212', 'Brando', 'ask where management was during the release'),
      new Scrum('Global Water', '480-123-456', 'justin', 'billing engine status')
    ];
  }

}
