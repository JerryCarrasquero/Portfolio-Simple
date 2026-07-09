export type TechStackCardId =
  | 'javascript'
  | 'typescript'
  | 'html5'
  | 'css3'
  | 'vite'
  | 'npm'
  | 'angular'
  | 'react'
  | 'materialUi'
  | 'flutter'
  | 'dart'
  | 'reactNative'
  | 'kotlin'
  | 'android'
  | 'androidStudio'
  | 'ionic'
  | 'nodeJs'
  | 'graphql'
  | 'apollo'
  | 'postgresql'
  | 'firebase'
  | 'linux'
  | 'docker'
  | 'figma'
  | 'postman'
  | 'copilot'
  | 'codeRabbit'
  | 'git'
  | 'github'
  | 'ciCd';

export interface TechStackCardEntity {
  id: TechStackCardId;
  name: string;
  imageSrc: string;
  alt?: string;
  accentColor?: string;
}