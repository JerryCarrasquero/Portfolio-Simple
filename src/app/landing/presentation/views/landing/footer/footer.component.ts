import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [],
})
export class FooterComponent {
  svgImageSrc = 'assets/footer/footer_image.svg';
  protected currentYear: number = new Date().getFullYear();
  protected email = 'carrasquerojerry@gmail.com';
  protected isAvailableForHire = true; //
}
