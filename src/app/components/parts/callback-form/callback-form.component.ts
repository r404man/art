import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.scss']
})
export class CallbackFormComponent implements OnInit {
  message: string = null;
  messageErr: boolean = false;

  constructor(private reviewService: ReviewService) { }

  onSend(form: NgForm) {
    let currentDate = date => date.toISOString().slice(0, 10);
    currentDate = currentDate(new Date());
    let review = form.value;
    review.date = currentDate;


    if (review.name.length > 3 && review.description.length > 5 && review.mail.length > 5) {

      this.reviewService.addReview(review)
        .finally(
          () => {
            this.messageErr = false;
            form.reset();
            this.message = 'Ваш отзыв успешно добавлен!';
          }
        )
        .catch(
          (err) => {
            this.message = 'Попробуйте еще раз!';
            console.error(err);
          }
        )
    } else {
      this.message = 'Введите корректные данные';
      this.messageErr = true;
    }
  }


  ngOnInit(): void {
  }

}
