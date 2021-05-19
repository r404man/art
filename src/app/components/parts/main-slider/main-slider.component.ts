import { Component, OnInit } from '@angular/core';
// import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { SwiperOptions } from 'swiper'

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 6000,
    },
    loop: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
