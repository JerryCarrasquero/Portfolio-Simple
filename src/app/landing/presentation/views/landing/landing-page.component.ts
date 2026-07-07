import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutMeSectionComponent } from './sections/about-me/about-me-section.component';
import { GreetingsSectionComponent } from './sections/greetings/greetings-section.component';
import { LetsConnectSectionComponent } from './sections/lets-connect/lets-connect-section.component';
import { ProjectsSectionComponent } from './sections/projects/projects-section.component';
import { SkillsSectionComponent } from './sections/skills/skills-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    GreetingsSectionComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    LetsConnectSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  @ViewChild('landingContainer')
  private readonly landingContainer?: ElementRef<HTMLElement>;

  protected hasPortfolioBeenRevealed = false;
  protected isHeroCompact = false;

  protected revealPortfolio(): void {
    if (this.hasPortfolioBeenRevealed) {
      this.isHeroCompact = true;
      return;
    }

    this.hasPortfolioBeenRevealed = true;
    this.isHeroCompact = true;
  }

  protected handleScroll(): void {
    const container = this.landingContainer?.nativeElement;

    if (!container || !this.hasPortfolioBeenRevealed) {
      return;
    }

    this.isHeroCompact = container.scrollTop > 8;
  }

  protected goToPortfolio(): void {
    this.revealPortfolio();

    queueMicrotask(() => {
      const container = this.landingContainer?.nativeElement;
      const aboutMeSection = container?.querySelector<HTMLElement>('#about-me');
      aboutMeSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
