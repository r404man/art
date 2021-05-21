import { Component, OnInit } from '@angular/core';
import { Art } from 'src/app/interfaces/art';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  arts: Art[] = null;


  constructor(private artService: ArtService) { }

  getArts() {
    this.artService.getArts().subscribe(
      data => {
        this.arts = data.map(val => {
          return { id: val.payload.doc.id, ...val.payload.doc.data() as Art }
        })
      }
    )
  }

  ngOnInit(): void {
    this.getArts();
  }

}
