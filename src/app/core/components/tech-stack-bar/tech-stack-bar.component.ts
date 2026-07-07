import { Component, Input } from '@angular/core';
import { TechStackCardComponent } from '../tech-stack-card/tech-stack-card.component';

export interface TechStackCardItem {
  name: string;
  imageSrc: string;
  alt?: string;
  accentColor?: string;
}

export interface StackBarPalette {
  start: string;
  end: string;
  border: string;
  text: string;
}

@Component({
  selector: 'app-tech-stack-bar',
  imports: [TechStackCardComponent],
  templateUrl: './tech-stack-bar.component.html',
  styleUrl: './tech-stack-bar.component.css',
})
export class TechStackBarComponent {
  @Input() title = '';
  @Input() cards: ReadonlyArray<TechStackCardItem> = [];

  @Input() palette: StackBarPalette = {
    start: 'var(--stack-bar-silver-start)',
    end: 'var(--stack-bar-silver-end)',
    border: 'var(--stack-bar-silver-border)',
    text: 'var(--stack-bar-title-text-dark)',
  };
}