import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoreComponent } from './components/more/more.component';
import { MainComponent } from './components/main/main.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirect to Home by default
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'more', component: MoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
