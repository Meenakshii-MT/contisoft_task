import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../app/about-page/about-page.component';
import { ContactComponent } from '../app/contact/contact.component';
import { HomePageComponent } from '../app/home-page/home-page.component';


const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomePageComponent },
  { path: "", component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
