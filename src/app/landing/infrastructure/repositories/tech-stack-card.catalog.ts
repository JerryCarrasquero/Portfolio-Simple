import { TechStackCardEntity, TechStackCardId } from '../../domain/entities/tech-stack-card.entity';

const stackLogoBasePath = 'asset/stack_logo';

function stackLogo(fileName: string): string {
  return `${stackLogoBasePath}/${fileName}`;
}

export const TECH_STACK_CARD_CATALOG: Readonly<Record<TechStackCardId, TechStackCardEntity>> = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    imageSrc: stackLogo('javaScript.svg'),
    alt: 'javaScript',
    accentColor: 'var(--tech-stack-accent-javascript)',
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    imageSrc: stackLogo('TypeScript.svg'),
    accentColor: 'var(--tech-stack-accent-typescript)',
  },
  html5: {
    id: 'html5',
    name: 'HTML5',
    imageSrc: stackLogo('html5.svg'),
    alt: 'html5',
    accentColor: 'var(--tech-stack-accent-html5)',
  },
  css3: {
    id: 'css3',
    name: 'CSS3',
    imageSrc: stackLogo('CSS3.svg'),
    accentColor: 'var(--tech-stack-accent-css3)',
  },
  vite: {
    id: 'vite',
    name: 'Vite',
    imageSrc: stackLogo('vite.svg'),
    accentColor: 'var(--tech-stack-accent-vite)',
  },
  npm: {
    id: 'npm',
    name: 'npm',
    imageSrc: stackLogo('npm.svg'),
    accentColor: 'var(--tech-stack-accent-npm)',
  },
  angular: {
    id: 'angular',
    name: 'Angular',
    imageSrc: stackLogo('Angular.svg'),
    accentColor: 'var(--tech-stack-accent-angular)',
  },
  react: {
    id: 'react',
    name: 'React',
    imageSrc: stackLogo('React.svg'),
    accentColor: 'var(--tech-stack-accent-react)',
  },
  materialUi: {
    id: 'materialUi',
    name: 'MaterialUI',
    imageSrc: stackLogo('MaterialUI.svg'),
    accentColor: 'var(--tech-stack-accent-material-ui)',
  },
  flutter: {
    id: 'flutter',
    name: 'Flutter',
    imageSrc: stackLogo('flutter.svg'),
    accentColor: 'var(--tech-stack-accent-flutter)',
  },
  dart: {
    id: 'dart',
    name: 'Dart',
    imageSrc: stackLogo('darts.svg'),
    alt: 'darts',
    accentColor: 'var(--tech-stack-accent-dart)',
  },
  reactNative: {
    id: 'reactNative',
    name: 'React Native',
    imageSrc: stackLogo('React Native.svg'),
    accentColor: 'var(--tech-stack-accent-react-native)',
  },
  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    imageSrc: stackLogo('Kotlin.svg'),
    accentColor: 'var(--tech-stack-accent-kotlin)',
  },
  android: {
    id: 'android',
    name: 'Android',
    imageSrc: stackLogo('android_Studio.svg'),
    alt: 'android_Studio',
    accentColor: 'var(--tech-stack-accent-android-studio)',
  },
  androidStudio: {
    id: 'androidStudio',
    name: 'Android Studio',
    imageSrc: stackLogo('android_Studio.svg'),
    alt: 'android_Studio',
    accentColor: 'var(--tech-stack-accent-android-studio)',
  },
  ionic: {
    id: 'ionic',
    name: 'Ionic',
    imageSrc: stackLogo('Ionic.svg'),
    accentColor: 'var(--tech-stack-accent-ionic)',
  },
  nodeJs: {
    id: 'nodeJs',
    name: 'Node.js',
    imageSrc: stackLogo('nodesjs.svg'),
    alt: 'nodesjs',
    accentColor: 'var(--tech-stack-accent-nodejs)',
  },
  graphql: {
    id: 'graphql',
    name: 'GraphQL',
    imageSrc: stackLogo('GraphQL.svg'),
    accentColor: 'var(--tech-stack-accent-graphql)',
  },
  apollo: {
    id: 'apollo',
    name: 'Apollo',
    imageSrc: stackLogo('Apollo Graphql.svg'),
    accentColor: 'var(--tech-stack-accent-apollo)',
  },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    imageSrc: stackLogo('postgrese.svg'),
    alt: 'postgrese',
    accentColor: 'var(--tech-stack-accent-postgresql)',
  },
  firebase: {
    id: 'firebase',
    name: 'Firebase',
    imageSrc: stackLogo('FireBase.svg'),
    alt: 'FireBase',
    accentColor: 'var(--tech-stack-accent-firebase)',
  },
  linux: {
    id: 'linux',
    name: 'Linux',
    imageSrc: stackLogo('linux.svg'),
    accentColor: 'var(--tech-stack-accent-linux)',
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    imageSrc: stackLogo('docker.svg'),
    accentColor: 'var(--tech-stack-accent-docker)',
  },
  figma: {
    id: 'figma',
    name: 'Figma',
    imageSrc: stackLogo('Figma.svg'),
    accentColor: 'var(--tech-stack-accent-figma)',
  },
  postman: {
    id: 'postman',
    name: 'Postman',
    imageSrc: stackLogo('Postman.svg'),
    accentColor: 'var(--tech-stack-accent-postman)',
  },
  copilot: {
    id: 'copilot',
    name: 'Copilot',
    imageSrc: stackLogo('copilot.svg'),
    accentColor: 'var(--tech-stack-accent-copilot)',
  },
  codeRabbit: {
    id: 'codeRabbit',
    name: 'CodeRabit',
    imageSrc: stackLogo('RabbitAI.svg'),
    accentColor: 'var(--tech-stack-accent-coderabit)',
  },
  git: {
    id: 'git',
    name: 'Git',
    imageSrc: stackLogo('Git.svg'),
    accentColor: 'var(--tech-stack-accent-git)',
  },
  github: {
    id: 'github',
    name: 'GitHub',
    imageSrc: stackLogo('GitHub.svg'),
    accentColor: 'var(--tech-stack-accent-github)',
  },
  ciCd: {
    id: 'ciCd',
    name: 'CI/CD',
    imageSrc: stackLogo('GitHub.svg'),
    accentColor: 'var(--tech-stack-accent-github)',
  },
  gmail: {
    id: 'gmail',
    name: 'Gmail',
    imageSrc: stackLogo('gmail.svg'),
    accentColor: 'var(--tech-stack-accent-gmail)',
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    imageSrc: stackLogo('Linkedin.svg'),
    accentColor: 'var(--tech-stack-accent-linkedin)',
  },
};

export function resolveTechStackCards(
  ids: readonly TechStackCardId[],
): ReadonlyArray<TechStackCardEntity> {
  return ids.map((id) => TECH_STACK_CARD_CATALOG[id]);
}

export function resolveSingleTechStackCard(id: TechStackCardId): TechStackCardEntity {
  return TECH_STACK_CARD_CATALOG[id];
}
