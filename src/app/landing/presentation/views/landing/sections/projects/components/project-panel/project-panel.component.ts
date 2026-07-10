import { Component, Input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TechStackCardComponent } from '../../../../../../../../core/components/tech-stack-card/tech-stack-card.component';
import { TechStackCardEntity } from '../../../../../../../domain/entities/tech-stack-card.entity';
import { Loading } from '../../../../../../../../core/components/loading/loading.component';

export interface ProjectPanelViewModel {
  summary: string;
  visibility: string;
  company: string;
  playStoreUrl?: string | null;
  playStoreLabel?: string;
  proofImageSrc?: string | null;
  proofImageAlt?: string;
  skills: ReadonlyArray<TechStackCardEntity>;
}

@Component({
  selector: 'app-project-panel',
  imports: [TechStackCardComponent, MatButtonModule, Loading],
  templateUrl: './project-panel.component.html',
  styleUrl: './project-panel.component.css',
})
export class ProjectPanelComponent {
  @Input({ required: true }) project!: ProjectPanelViewModel;
  protected get hasPlayStoreLink(): boolean {
    return (
      typeof this.project.playStoreUrl === 'string' && this.project.playStoreUrl.trim().length > 0
    );
  }
  protected get hasImage(): boolean {
    return (
      typeof this.project.proofImageSrc === 'string' && this.project.proofImageSrc.trim().length > 0
    );
  }
}
