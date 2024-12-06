import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home/home.component';
import { AboutComponent } from '../components/about/about/about.component';
import { ContactComponent } from '../components/contact/contact/contact.component';
import { MoreComponent } from '../components/more/more/more.component';
import { WorkComponent } from '../components/work/work/work.component';



export const routes: Routes = [
    { path: '/*', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/work', component: WorkComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/more', component: MoreComponent }
];
