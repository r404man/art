import { Component } from '@angular/core';
import { ArtService } from './services/art.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private artservice: ArtService) {

  }

  title = 'art-shop';
}
