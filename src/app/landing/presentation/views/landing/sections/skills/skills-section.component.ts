import { Component } from '@angular/core';
import {
  StackBarPalette,
  TechStackBarComponent,
  TechStackCardItem,
} from '../../../../../../core/components/tech-stack-bar/tech-stack-bar.component';

interface StackGroup {
  title: string;
  palette: StackBarPalette;
  span: number;
  cards: TechStackCardItem[];
}

@Component({
  selector: 'app-skills-section',
  imports: [TechStackBarComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  private readonly stackLogoBasePath = '/asset/stack_logo';

  private stackLogo(fileName: string): string {
    return `${this.stackLogoBasePath}/${fileName}`;
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
      cards: [
        {
          name: 'JavaScript',
          imageSrc: this.stackLogo('javaScript.svg'),
          alt: 'javaScript',
          accentColor: 'var(--tech-stack-accent-javascript)',
        },
        {
          name: 'TypeScript',
          imageSrc: this.stackLogo('TypeScript.svg'),
          accentColor: 'var(--tech-stack-accent-typescript)',
        },
        {
          name: 'HTML5',
          imageSrc: this.stackLogo('html5.svg'),
          alt: 'html5',
          accentColor: 'var(--tech-stack-accent-html5)',
        },
        {
          name: 'CSS3',
          imageSrc: this.stackLogo('CSS3.svg'),
          accentColor: 'var(--tech-stack-accent-css3)',
        },
        {
          name: 'Vite',
          imageSrc: this.stackLogo('vite.svg'),
          accentColor: 'var(--tech-stack-accent-vite)',
        },
        {
          name: 'npm',
          imageSrc: this.stackLogo('npm.svg'),
          accentColor: 'var(--tech-stack-accent-npm)',
        },
      ],
    },
    {
      title: 'Front end Frameworks & UI',
      palette: this.palettes.cyan,
      span: 5,
      cards: [
        {
          name: 'Angular',
          imageSrc: this.stackLogo('Angular.svg'),
          accentColor: 'var(--tech-stack-accent-angular)',
        },
        {
          name: 'React',
          imageSrc: this.stackLogo('React.svg'),
          accentColor: 'var(--tech-stack-accent-react)',
        },
        {
          name: 'MaterialUI',
          imageSrc: this.stackLogo('MaterialUI.svg'),
          accentColor: 'var(--tech-stack-accent-material-ui)',
        },
      ],
    },
    {
      title: 'Mobile Development',
      palette: this.palettes.violet,
      span: 7,
      cards: [
        {
          name: 'Flutter',
          imageSrc: this.stackLogo('flutter.svg'),
          accentColor: 'var(--tech-stack-accent-flutter)',
        },
        {
          name: 'Dart',
          imageSrc: this.stackLogo('darts.svg'),
          alt: 'darts',
          accentColor: 'var(--tech-stack-accent-dart)',
        },
        {
          name: 'React Native',
          imageSrc: this.stackLogo('React Native.svg'),
          accentColor: 'var(--tech-stack-accent-react-native)',
        },
        {
          name: 'Kotlin',
          imageSrc: this.stackLogo('Kotlin.svg'),
          accentColor: 'var(--tech-stack-accent-kotlin)',
        },
        {
          name: 'Android Studio',
          imageSrc: this.stackLogo('android_Studio.svg'),
          alt: 'android_Studio',
          accentColor: 'var(--tech-stack-accent-android-studio)',
        },
        {
          name: 'Ionic',
          imageSrc: this.stackLogo('Ionic.svg'),
          accentColor: 'var(--tech-stack-accent-ionic)',
        },
      ],
    },
    {
      title: 'Back-end & Databases',
      palette: this.palettes.silver,
      span: 5,
      cards: [
        {
          name: 'Node.js',
          imageSrc: this.stackLogo('nodesjs.svg'),
          alt: 'nodesjs',
          accentColor: 'var(--tech-stack-accent-nodejs)',
        },
        {
          name: 'GraphQL',
          imageSrc: this.stackLogo('GraphQL.svg'),
          accentColor: 'var(--tech-stack-accent-graphql)',
        },
        {
          name: 'Apollo GraphQL / Apollo',
          imageSrc: this.stackLogo('Apollo Graphql.svg'),
          accentColor: 'var(--tech-stack-accent-apollo)',
        },
        {
          name: 'PostgreSQL',
          imageSrc: this.stackLogo('postgrese.svg'),
          alt: 'postgrese',
          accentColor: 'var(--tech-stack-accent-postgresql)',
        },
        {
          name: 'Firebase',
          imageSrc: this.stackLogo('FireBase.svg'),
          alt: 'FireBase',
          accentColor: 'var(--tech-stack-accent-firebase)',
        },
      ],
    },
    {
      title: 'Infrastructure & Design Tools',
      palette: this.palettes.pink,
      span: 4,
      cards: [
        {
          name: 'Linux',
          imageSrc: this.stackLogo('linux.svg'),
          accentColor: 'var(--tech-stack-accent-linux)',
        },
        {
          name: 'Docker',
          imageSrc: this.stackLogo('docker.svg'),
          accentColor: 'var(--tech-stack-accent-docker)',
        },
        {
          name: 'Figma',
          imageSrc: this.stackLogo('Figma.svg'),
          accentColor: 'var(--tech-stack-accent-figma)',
        },
      ],
    },
    {
      title: 'AI',
      palette: this.palettes.orange,
      span: 4,
      cards: [
        {
          name: 'Copilot',
          imageSrc: this.stackLogo('copilot.svg'),
          accentColor: 'var(--tech-stack-accent-copilot)',
        },
        {
          name: 'CodeRabit',
          imageSrc: this.stackLogo('RabbitAI.svg'),
          accentColor: 'var(--tech-stack-accent-coderabit)',
        },
      ],
    },
    {
      title: 'Git',
      palette: this.palettes.green,
      span: 4,
      cards: [
        {
          name: 'Git',
          imageSrc: this.stackLogo('Git.svg'),
          accentColor: 'var(--tech-stack-accent-git)',
        },
        {
          name: 'GitHub',
          imageSrc: this.stackLogo('GitHub.svg'),
          accentColor: 'var(--tech-stack-accent-github)',
        },
      ],
    },
  ];
}
