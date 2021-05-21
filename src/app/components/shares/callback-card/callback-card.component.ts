import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/interfaces/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-callback-card',
  templateUrl: './callback-card.component.html',
  styleUrls: ['./callback-card.component.scss']
})
export class CallbackCardComponent implements OnInit {
  @Input() item: Review;

  constructor() { }


  ngOnInit(): void {
  }

}
