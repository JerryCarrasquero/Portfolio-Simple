import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-stack-card',
  templateUrl: './tech-stack-card.component.html',
  styleUrl: './tech-stack-card.component.css',
})
export class TechStackCardComponent {
  @Input() name = '';
  @Input() imageSrc = '';
  @Input() alt = '';
  @Input() accentColor = 'var(--color-tertiary)';
}