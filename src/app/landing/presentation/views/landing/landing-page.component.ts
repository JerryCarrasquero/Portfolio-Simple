import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutMeSectionComponent } from './sections/about-me/about-me-section.component';
import { GreetingsSectionComponent } from './sections/greetings/greetings-section.component';
import { LetsConnectSectionComponent } from './sections/lets-connect/lets-connect-section.component';
import { ProjectsSectionComponent } from './sections/projects/projects-section.component';
import { SkillsSectionComponent } from './sections/skills/skills-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    GreetingsSectionComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    LetsConnectSectionComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  private static readonly heroCompactTransitionMs = 450;

  @ViewChild('landingContainer')
  private readonly landingContainer?: ElementRef<HTMLElement>;

  protected isHeroCompact = false;

  protected handleScroll(): void {
    const container = this.landingContainer?.nativeElement;

    this.isHeroCompact = !!container && container.scrollTop > 8;
  }

  protected goToPortfolio(): void {
    if (this.isHeroCompact) {
      this.scrollToSection('about-me');
      return;
    }

    this.isHeroCompact = true;

    window.setTimeout(() => {
      this.scrollToSection('about-me');
    }, LandingPageComponent.heroCompactTransitionMs);
  }

  private scrollToSection(sectionId: string): void {
    queueMicrotask(() => {
      const container = this.landingContainer?.nativeElement;
      const section = container?.querySelector<HTMLElement>(`#${sectionId}`);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
