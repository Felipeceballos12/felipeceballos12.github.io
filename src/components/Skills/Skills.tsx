import themeStyles from '../../theme.module.css';
import styles from './Skills.module.css';

import { SkillIcons, Skill } from '../Skill/Skill';

const skills: SkillIcons[] = [
  'TypeScript',
  'Expo',
  'React',
  'JavaScript',
  'Python',
  'Git',
  'C#',
  'Jest',
  'Figma',
  'CSS',
  'HTML',
];

export default function Skills() {
  return (
    <section id="skills" className={themeStyles.section}>
      <h2>Skills</h2>
      <div className={styles.SkillsContainer}>
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}

/*
 <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.descriptionsContainer}>
          <Education />
        </div>
      </section>
      <section className={styles.section}>
        <h2>Certification</h2>
        <div className={styles.descriptionsContainer}>
          <Education />
        </div>
      </section> 
*/
