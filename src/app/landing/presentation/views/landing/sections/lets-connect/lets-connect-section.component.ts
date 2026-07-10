import { Component } from '@angular/core';
import { resolveSingleTechStackCard } from '../../../../../infrastructure/repositories/tech-stack-card.catalog';
import { TechStackCardComponent } from "../../../../../../core/components/tech-stack-card/tech-stack-card.component";
import { TechStackCardEntity } from '../../../../../domain/entities/tech-stack-card.entity';

@Component({
  selector: 'app-lets-connect-section',
  templateUrl: './lets-connect-section.component.html',
  styleUrl: './lets-connect-section.component.css',
  imports: [TechStackCardComponent],
})
export class LetsConnectSectionComponent {
  githubCard: TechStackCardEntity = resolveSingleTechStackCard('github');
  gmailCard: TechStackCardEntity = resolveSingleTechStackCard('gmail');
  linkedinCard: TechStackCardEntity = resolveSingleTechStackCard('linkedin');
  svgImageSrc = 'assets/footer/footer_image.svg';
  protected currentYear: number = new Date().getFullYear();
  protected email = 'carrasquerojerry@gmail.com';
  protected isAvailableForHire = true; //
}
