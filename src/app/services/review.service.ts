import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private firestore: AngularFirestore) { }

  getReviews() {
    return this.firestore.collection('reviews').valueChanges() as Observable<Review[]>;
  }

  addReview(data: Review) {
    return this.firestore.collection('reviews').add(data);
  }
}
