import { Component, OnInit } from '@angular/core';
import { argv } from 'process';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interfaces/offer';
import { ArtService } from 'src/app/services/art.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.scss']
})
export class OfferPageComponent implements OnInit {
  // $offers: Observable<Offer[]>;
  offers: Offer[] = null;

  constructor(private offerService: OfferService, private artService: ArtService) { }

  getOffers() {
    this.offerService.getOffers().subscribe(
      data => {
        this.offers = data.map(val => {
          return {
            id: val.payload.doc.id,
            ...val.payload.doc.data() as Offer
          }
        });
      }
    );
  }

  deleteOffer(id: string) {
    this.offerService.deleteOffer(id).finally(
      () => {
        // console.log('delete');
      }
    );
  }

  ngOnInit(): void {
    this.getOffers();
  }

}
