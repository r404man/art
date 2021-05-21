import { Component, Input, OnInit } from '@angular/core';
import { Art } from 'src/app/interfaces/art';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Art;
  thumbUrl: string = null;

  constructor(private artService: ArtService) { }

  getThumb() {
    this.artService.getThumbArt(this.item.imgUrl).subscribe(
      data => {
        this.thumbUrl = data;
      }
    )
  }

  ngOnInit(): void {
    this.getThumb();
  }

}
