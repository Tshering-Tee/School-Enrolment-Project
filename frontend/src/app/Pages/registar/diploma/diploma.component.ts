import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-diploma',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './diploma.component.html',
  styleUrl: './diploma.component.css'
})
export class DiplomaComponent {
  logo = 'assets/Images/logo.jpg'
  ceo = 'assets/Images/18038gb1550f8.jpg'
  adm = 'assets/Images/pic5.jpg'
  director = 'assets/Images/pic2.jpg'
  sherabtse = 'assets/Images/Sherubtse-1.webp'
  rtc = 'assets/Images/video_galley.png'
  gyelpozhing = 'assets/Images/GCIT-1.webp'
  cst = 'assets/Images/CST-1.webp'
  parocollege = 'assets/Images/PCE-1.webp'
  taktse = 'assets/Images/CLCS-1.webp'
  cnr = 'assets/Images/CNR-1.webp'
  samtse = 'assets/Images/SCE-1.webp'
  athang = 'assets/Images/athang.jpeg'

}
