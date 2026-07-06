import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TypewriterComponent } from '../../../../../../core/components/typewriter/typewriter.component';

@Component({
  selector: 'app-greetings-section',
  imports: [TypewriterComponent, MatButtonModule],
  templateUrl: './greetings-section.component.html',
  styleUrl: './greetings-section.component.css',
})
export class GreetingsSectionComponent {
  @Input() isPortfolioRevealed = false;
  @Output() goToPortfolioRequested = new EventEmitter<void>();

  protected isTextVisible = false;

  protected requestPortfolio(): void {
    this.goToPortfolioRequested.emit();
  }

  protected handleTypewriterCompleted(): void {
    this.isTextVisible = true;
  }
}
