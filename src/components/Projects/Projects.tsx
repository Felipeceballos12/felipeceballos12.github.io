//import styles from './Projects.module.css';
import styles from './Projects.module.css';
import themeStyles from '../../theme.module.css';

import Card from '../Card/Card';
import { projects } from '../../lib/data';

export default function Projects() {
  return (
    <section id="projects" className={themeStyles.section}>
      <h2>Projects</h2>
      <div className={styles.cardsContainer}>
        {projects.map(
          ({ id, name, image, description, stack, link }) => (
            <Card
              key={id}
              image={image}
              name={name}
              description={description}
              stack={stack}
              link={link}
            />
          )
        )}
      </div>
    </section>
  );
}
