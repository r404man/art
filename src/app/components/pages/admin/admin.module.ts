import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from './admin.component';
import { OfferPageComponent } from '../offer-page/offer-page.component';
import { ArtCreateComponent } from '../art-create/art-create.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArtCreateFormComponent } from '../../parts/art-create-form/art-create-form.component';
import { ArtCreateCardComponent } from '../../parts/art-create-card/art-create-card.component';
import { CreateListComponent } from '../../parts/create-list/create-list.component';
import { OfferArtDetailComponent } from '../../parts/offer-art-detail/offer-art-detail.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, children: [
      { path: 'create-art', component: ArtCreateComponent },
      { path: 'offers', component: OfferPageComponent },
    ]
  },
  { path: '**', redirectTo: '/admin/auth' }
])

@NgModule({
  declarations: [
    CreateListComponent,
    AuthComponent,
    AdminComponent,
    ArtCreateComponent,
    OfferPageComponent,
    ArtCreateComponent,
    ArtCreateFormComponent,
    ArtCreateCardComponent,
    OfferArtDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ]
})
export class AdminModule { }
