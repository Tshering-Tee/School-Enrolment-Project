import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logo = "assets/Images/cropped-RUB.png"

  currentYear: number = new Date().getFullYear();
}
