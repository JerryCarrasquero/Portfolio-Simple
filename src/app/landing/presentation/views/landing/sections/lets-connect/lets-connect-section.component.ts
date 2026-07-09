import { Component } from '@angular/core';
import { resolveSingleTechStackCard } from '../../../../../infrastructure/repositories/tech-stack-card.catalog';
import { TechStackCardComponent } from "../../../../../../core/components/tech-stack-card/tech-stack-card.component";
import { TechStackCardEntity } from '../../../../../domain/entities/tech-stack-card.entity';
import { AboutMeSectionComponent } from "../about-me/about-me-section.component";
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
}
