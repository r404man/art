import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments = null;

  constructor(private reviewService: ReviewService) { }

  getReviews() {

    this.reviewService.getReviewsItems().subscribe(
      data => {
        this.comments = data.map(
          val => {
            return {
              commentId: val.payload.doc.id,
              ...val.payload.doc.data() as Object
            }
          }
        )
      }
    )
  }

  commentDelete(commentId: string) {
    this.reviewService.deleteReview(commentId).finally(
      () => {
        console.log('deleted');
      }
    ).catch(
      (err) => {
        console.error(err);
      }
    )
  }

  ngOnInit(): void {
    this.getReviews();
  }

}
