import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  FolderTabItem,
  FolderTabsComponent,
} from '../../../../../../core/components/folder-tabs/folder-tabs.component';
import {
  TechStackCardComponent,
} from '../../../../../../core/components/tech-stack-card/tech-stack-card.component';
import {
  TechStackCardEntity,
  TechStackCardId,
} from '../../../../../domain/entities/tech-stack-card.entity';
import { resolveTechStackCards } from '../../../../../infrastructure/repositories/tech-stack-card.catalog';

interface ProjectFolderTab extends FolderTabItem {
  summary: string;
  visibility: string;
  company: string;
  imageSrc?: string | null;
  playStoreUrl?: string | null;
  playStoreLabel?: string;
  skills: ReadonlyArray<TechStackCardEntity>;
}

@Component({
  selector: 'app-projects-section',
  imports: [FolderTabsComponent, TechStackCardComponent, MatButtonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  private skillCards(ids: readonly TechStackCardId[]): ReadonlyArray<TechStackCardEntity> {
    return resolveTechStackCards(ids);
  }

  protected readonly projectTabs: ReadonlyArray<ProjectFolderTab> = [
    {
      title: 'Nealia Farms',
      summary:
        'A comprehensive, multi-platform IoT ecosystem designed for total automated farm management. I engineered the entirety of the UI across the mobile application, web dashboard, and a dedicated Linux application running on on-site farm screens. I integrated MQTT topic subscriptions for real-time telemetry and immediate physical hardware synchronization.',
      visibility: 'No (In Development)',
      company: 'Nealia',
      playStoreLabel: 'Get it on Play Store',
      skills: this.skillCards(['flutter', 'linux', 'figma', 'postman']),
    },
    {
      title: 'Qportal',
      summary:
        'A robust, internal enterprise platform combining API management, workflow automation, and dynamic form orchestration. As the Front End Engineer, I decoupled the monolithic client UI to align with a modern microservices architecture and migrated the entire data layer from RESTful endpoints to Apollo GraphQL. This transformation drastically reduced operational latency, streamlined form delivery, and ensured complete end-to-end traceability for internal company operations.',
      visibility: 'Internal',
      company: 'EmQu Technologies',
      skills: this.skillCards(['react', 'vite', 'apollo']),
    },
    {
      title: 'Rondinero',
      summary:
        'A comprehensive mobile and web solution for real-time workforce supervision and route planning. I designed and engineered a high-fidelity mobile UI featuring strict schedule enforcement, custom field questionnaires, and hardware-backed NFC/GPS checkpoint verification. It includes automated email alerting with voice and image attachments, managed entirely through a centralized administrative web console.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.emqu.rondinero.sigo&hl=en',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['reactNative', 'android', 'figma', 'postman']),
    },
    {
      title: 'QUINI3L',
      summary:
        'A sleek mobile app built to replace clunky tournament spreadsheets with an intuitive, social experience. As the sole designer, I architected the complete user flow and engineered nearly every custom UI component from scratch.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=emqu.ionic.quini3l',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['android', 'figma', 'ionic', 'postman']),
    },
    {
      title: 'Supervision',
      summary:
        'A robust mobile workforce solution for real-time service center routing and supervisor tracking. I designed and engineered a high-fidelity mobile UI featuring strict schedule enforcement, dynamic field questionnaires, and hardware-backed NFC/GPS checkpoint verification, backed by automated multi-media email alerts and a centralized web admin console.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.emqu.supervision.sigo',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['reactNative', 'android', 'figma', 'postman']),
    },
    {
      title: 'Bitacora',
      summary:
        'A digital-first mobile application designed to replace paper logs with real-time assignment tracking. I engineered a highly intuitive mobile UI that transforms manual workflows into dynamic, personalized field questionnaires, enabling staff to instantly submit image and voice evidence directly to a centralized web administration console.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.emqu.bitacora.sigo',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['reactNative', 'android', 'figma', 'postman']),
    },
    {
      title: 'Asistencia Sistgo',
      summary:
        'A multi-method biometrics and attendance-tracking mobile application for corporate personnel coverage. Serving in a supervisory capacity, I overseen the development lifecycle and directly engineered the custom QR-code user recognition and authentication module.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.emqu.asistencia.sistgo',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['kotlin', 'android']),
    },
    {
      title: 'Control de Acceso Sistgo',
      summary:
        'A secure mobile platform for monitoring third-party visitors and vehicle access. I engineered the front-end workflows to support recurring visit scheduling, custom credential generation, and localized identity-verification questionnaires tailored for guest screening.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.emqu.controlDeAcceso.sigo',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['kotlin', 'android']),
    },
    {
      title: 'QUaccess',
      summary:
        'An enterprise workforce and attendance tracking mobile application designed for distributed shift management and shift reporting. Serving as the Technical Lead and Supervisor, I orchestrated the development lifecycle, oversaw multi-role user workflows, and directly managed the deployment and release lifecycle on the Google Play Store.',
      visibility: 'yes, appstore',
      company: 'EmQu Technologies',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=net.emqu.quaccess.release',
      playStoreLabel: 'Download from Play Store',
      skills: this.skillCards(['kotlin', 'android']),
    },
  ];

  protected hasPlayStoreLink(project: ProjectFolderTab): boolean {
    return typeof project.playStoreUrl === 'string' && project.playStoreUrl.trim().length > 0;
  }

  protected hasProjectMedia(project: ProjectFolderTab): boolean {
    return this.hasProjectImage(project) || this.hasPlayStoreLink(project);
  }

  protected hasProjectImage(project: ProjectFolderTab): boolean {
    return typeof project.imageSrc === 'string' && project.imageSrc.trim().length > 0;
  }
}
