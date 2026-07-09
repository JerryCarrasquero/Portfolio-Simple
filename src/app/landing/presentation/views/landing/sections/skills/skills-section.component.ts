import { Component } from '@angular/core';
import {
  StackBarPalette,
  TechStackBarComponent,
} from '../../../../../../core/components/tech-stack-bar/tech-stack-bar.component';
import {
  TechStackCardEntity,
  TechStackCardId,
} from '../../../../../domain/entities/tech-stack-card.entity';
import { resolveTechStackCards } from '../../../../../infrastructure/repositories/tech-stack-card.catalog';

interface StackGroup {
  title: string;
  palette: StackBarPalette;
  span: number;
  cards: ReadonlyArray<TechStackCardEntity>;
}

@Component({
  selector: 'app-skills-section',
  imports: [TechStackBarComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  private cards(ids: readonly TechStackCardId[]): ReadonlyArray<TechStackCardEntity> {
    return resolveTechStackCards(ids);
  }

  private readonly palettes = {
    amber: {
      start: 'var(--stack-bar-amber-start)',
      end: 'var(--stack-bar-amber-end)',
      border: 'var(--stack-bar-amber-border)',
      text: 'var(--stack-bar-title-text-dark)',
    },
    silver: {
      start: 'var(--stack-bar-silver-start)',
      end: 'var(--stack-bar-silver-end)',
      border: 'var(--stack-bar-silver-border)',
      text: 'var(--stack-bar-title-text-dark)',
    },
    orange: {
      start: 'var(--stack-bar-orange-start)',
      end: 'var(--stack-bar-orange-end)',
      border: 'var(--stack-bar-orange-border)',
      text: 'var(--stack-bar-title-text-dark)',
    },
    green: {
      start: 'var(--stack-bar-green-start)',
      end: 'var(--stack-bar-green-end)',
      border: 'var(--stack-bar-green-border)',
      text: 'var(--stack-bar-title-text-dark)',
    },
    cyan: {
      start: 'var(--stack-bar-cyan-start)',
      end: 'var(--stack-bar-cyan-end)',
      border: 'var(--stack-bar-cyan-border)',
      text: 'var(--stack-bar-title-text-dark)',
    },
    violet: {
      start: 'var(--stack-bar-violet-start)',
      end: 'var(--stack-bar-violet-end)',
      border: 'var(--stack-bar-violet-border)',
      text: 'var(--stack-bar-title-text-light)',
    },
    pink: {
      start: 'var(--stack-bar-pink-start)',
      end: 'var(--stack-bar-pink-end)',
      border: 'var(--stack-bar-pink-border)',
      text: 'var(--stack-bar-title-text-light)',
    },
  } as const;

  protected readonly stackGroups: StackGroup[] = [
    {
      title: 'Front end (Core & Tooling)',
      palette: this.palettes.amber,
      span: 7,
      cards: this.cards(['javascript', 'typescript', 'html5', 'css3', 'vite', 'npm']),
    },
    {
      title: 'Front end Frameworks & UI',
      palette: this.palettes.cyan,
      span: 5,
      cards: this.cards(['angular', 'react', 'materialUi']),
    },
    {
      title: 'Mobile Development',
      palette: this.palettes.violet,
      span: 7,
      cards: this.cards(['flutter', 'dart', 'reactNative', 'kotlin', 'androidStudio', 'ionic']),
    },
    {
      title: 'Back-end & Databases',
      palette: this.palettes.silver,
      span: 5,
      cards: this.cards(['nodeJs', 'graphql', 'apollo', 'postgresql', 'firebase']),
    },
    {
      title: 'Infrastructure & Design Tools',
      palette: this.palettes.pink,
      span: 4,
      cards: this.cards(['linux', 'docker', 'figma']),
    },
    {
      title: 'AI',
      palette: this.palettes.orange,
      span: 4,
      cards: this.cards(['copilot', 'codeRabbit']),
    },
    {
      title: 'Git',
      palette: this.palettes.green,
      span: 4,
      cards: this.cards(['git', 'github']),
    },
  ];
}
