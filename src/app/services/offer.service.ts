import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private firestore: AngularFirestore) { }

  addOffer(offer: Offer) {
    // console.log(offer);
    return this.firestore.collection('offers').add(offer);
  }

  getOffers() {
    return this.firestore.collection('offers').snapshotChanges();
  }

  deleteOffer(id:string) {
    return this.firestore.collection('offers').doc(id).delete();
  }
}
