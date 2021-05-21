import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Art } from 'src/app/interfaces/art';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  // $arts: Observable<Art[]>;

  arts: Art[] = null;
  constructor(private artService: ArtService) { }

  getArts() {
    this.artService.getArts().subscribe(
      data => {
        this.arts = data.map(val => {
          return {
            id: val.payload.doc.id,
            ...val.payload.doc.data() as Art
          }
        })
      }
    )
    // this.$arts = this.artService.getArts();
    // this.$arts.subscribe(
    //   data => {
    //     this.arts = data;
    //   }
    // )
  }

  ngOnInit(): void {
    this.getArts();
  }

}
