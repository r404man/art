import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtDetailComponent } from './components/pages/art-detail/art-detail.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contacts', component: ContactPageComponent },
  { path: 'art/:id', component: ArtDetailComponent },
  {
    path: 'admin', loadChildren: () => import('../app/components/pages/admin/admin.module')
      .then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
