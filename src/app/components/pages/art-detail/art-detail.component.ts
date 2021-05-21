import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Art } from 'src/app/interfaces/art';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent implements OnInit {

  art: Art = null;
  thumbUrl: string = null;
  artId: string;

  constructor(private route: ActivatedRoute, private artService: ArtService) { }

  getArt() {
    let artId = this.route.snapshot.paramMap.get('id');
    this.artService.getArt(artId).subscribe(
      data => {
        this.art = data.data() as Art;
        // console.log(this.art);
        if (this.art.imgUrl != null) {
          this.artService.getThumbArt(this.art.imgUrl).subscribe(
            data => {
              this.thumbUrl = data;

              // console.log(this.thumbUrl);
            }
          )
        }
      }
    );
  }

  ngOnInit(): void {
    this.getArt();
    this.artId = this.route.snapshot.paramMap.get('id');
  }

}
