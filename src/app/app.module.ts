import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HeaderComponent } from './components/shares/header/header.component';
import { FooterComponent } from './components/shares/footer/footer.component';
import { NavigationComponent } from './components/parts/navigation/navigation.component';
import { MainSliderComponent } from './components/parts/main-slider/main-slider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CardListComponent } from './components/parts/card-list/card-list.component';
import { CardComponent } from './components/shares/card/card.component';
import { CallbackFormComponent } from './components/parts/callback-form/callback-form.component';
import { CallbackCardComponent } from './components/shares/callback-card/callback-card.component';
import { SocialBarComponent } from './components/parts/social-bar/social-bar.component';
import { CallbackListComponent } from './components/parts/callback-list/callback-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainSliderComponent,
    CardListComponent,
    CardComponent,
    CallbackFormComponent,
    CallbackCardComponent,
    SocialBarComponent,
    CallbackListComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
