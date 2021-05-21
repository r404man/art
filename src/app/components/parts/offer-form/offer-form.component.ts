import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  @Input() artId: string;

  constructor(private offerService: OfferService) { }

  message: string = null;

  addOffer(form: NgForm) {
    let offerData = form.value;
    offerData.artId = this.artId;
    
    let currentDate = date => date.toISOString().slice(0, 10);
    currentDate = currentDate(new Date())

    offerData.date = currentDate;
    // console.log(offerData);
    if (offerData.name.length > 3 && offerData.mail.length > 3
      && offerData.phone.length > 3) {
      this.offerService.addOffer(offerData)
      .finally(
        () => {
          this.message = 'Ваш заказ добавлен в ожидание!';
          form.reset();
        }
      )
    } else {
      this.message = 'Введите корректные данные!'
    }
  }

  ngOnInit(): void {
  }

}
