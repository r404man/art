import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/interfaces/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-callback-list',
  templateUrl: './callback-list.component.html',
  styleUrls: ['./callback-list.component.scss']
})
export class CallbackListComponent implements OnInit {
  $reviews: Observable<Review[]>;
  reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  getReviews() {
    this.$reviews = this.reviewService.getReviews();
    this.$reviews.subscribe(
      data => {
        this.reviews = data.map(val => {
          return val;
        })
      }
    )
  }

  ngOnInit(): void {
    this.getReviews();
  }

}
