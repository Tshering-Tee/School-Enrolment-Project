import { Routes } from '@angular/router';
import { StartComponent } from './Pages/start/start.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavBarComponent } from './Pages/nav-bar/nav-bar.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { DiplomaComponent } from './Pages/registar/diploma/diploma.component';
import { LoginComponent } from './Pages/login/login.component';
import { DisplayMemberComponent } from './Pages/display-member/display-member.component';
import { CollegeComponent } from './Pages/Registraion/college/college.component';
import { GetCollegeComponent } from './Pages/Registraion/get-college/get-college.component';
import { UpdateCollegeComponent } from './Pages/Registraion/update-college/update-college.component';
import { EventsComponent } from './Pages/events/events.component';


export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'home', component: HomeComponent },
    {path: 'nav-bar', component: NavBarComponent},
    // {path: '**', component: NotfoundComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'diploma', component: DiplomaComponent},
    {path: 'displaymemeber', component: DisplayMemberComponent},
    {path: 'college', component: CollegeComponent},
    {path: 'get-college', component: GetCollegeComponent},
    {path: 'college/update/:id', component: UpdateCollegeComponent},
    {path: 'event', component: EventsComponent}
];
