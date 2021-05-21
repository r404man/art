import { Component, OnInit, Input } from '@angular/core';
import { Art } from 'src/app/interfaces/art';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-offer-art-detail',
  templateUrl: './offer-art-detail.component.html',
  styleUrls: ['./offer-art-detail.component.scss']
})
export class OfferArtDetailComponent implements OnInit {
  @Input() artId;
  art:Art;

  constructor(private artService: ArtService) { }

  getArt() {
    this.artService.getArt(this.artId).subscribe(
      data => {
        this.art = data.data() as Art;
      }
    );
  }

  ngOnInit(): void {
    this.getArt();
  }

}
