import styles from './Skill.module.css';

import {
  SiExpo,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiGit,
  SiCsharp,
  SiJest,
  SiFigma,
  SiCss3,
  SiHtml5,
} from '../../lib/Icons/Icons';

export type SkillIcons =
  | 'Expo'
  | 'React'
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'Git'
  | 'C#'
  | 'Jest'
  | 'Figma'
  | 'CSS'
  | 'HTML'
  | 'NodeJS';

export function Skill({ name }: { name: SkillIcons }) {
  const mapIconComponent = {
    Expo: SiExpo,
    React: SiReact,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    NodeJS: SiNodedotjs,
    Python: SiPython,
    Git: SiGit,
    'C#': SiCsharp,
    Jest: SiJest,
    Figma: SiFigma,
    CSS: SiCss3,
    HTML: SiHtml5,
  };

  const Icon = mapIconComponent[name];

  return (
    <div className={styles.container}>
      <Icon size={32} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
