import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ArtDetailComponent } from './components/pages/art-detail/art-detail.component';
import { OfferFormComponent } from './components/parts/offer-form/offer-form.component';
// import { OfferArtDetailComponent } from './components/parts/offer-art-detail/offer-art-detail.component';
// import { CreateListComponent } from './components/parts/create-list/create-list.component';
// import { AdminModule } from './components/pages/admin/admin.module';
// import { ArtCreateCardComponent } from './components/parts/art-create-card/art-create-card.component';
// import { ArtCreateFormComponent } from './components/parts/art-create-form/art-create-form.component';
// import { AdminComponent } from './components/pages/admin/admin.component';
// import { AuthComponent } from './components/pages/auth/auth.component';
// import { ArtCreateComponent } from './components/pages/art-create/art-create.component';
// import { OfferPageComponent } from './components/pages/offer-page/offer-page.component';

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
    CallbackListComponent,
    ArtDetailComponent,
    OfferFormComponent,
    // OfferArtDetailComponent,
    // CreateListComponent,
    // ArtCreateCardComponent,
    // ArtCreateFormComponent,
    // AdminComponent,
    // AuthComponent,
    // ArtCreateComponent,
    // OfferPageComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
