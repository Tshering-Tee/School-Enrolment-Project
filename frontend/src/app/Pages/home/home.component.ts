import { Component} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from '../footer/footer.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, MatTabsModule, FooterComponent, EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  hat = "assets/Images/unnamed.png"
  ministry = 'assets/Images/ministry.jpg'
  university = 'assets/Images/university.jpg'
  education = 'assets/Images/ECOuBcfVUAABd5O.jpg'
  sherabtse = 'assets/Images/Students at Sherubtse College campus.jpeg.jpg'
  rtc = 'assets/Images/RoyalThimphuCollege.jpeg'
  gyelpozhing = 'assets/Images/2-new-course-in-gyelposhing-college.jpg'
  cst = 'assets/Images/cst.jpg'
  parocollege = 'assets/Images/paro.jpg'
  taktse = 'assets/Images/taktsi.jpg'
  cnr = 'assets/Images/cnr.jpg'
  samtse = 'assets/Images/samtse.jpg'
  athang = 'assets/Images/athang.jpeg'
  logo = 'assets/Images/logo.jpg'
  ceo = 'assets/Images/18038gb1550f8.jpg'
  adm = 'assets/Images/pic5.jpg'
  director = 'assets/Images/pic2.jpg'
}