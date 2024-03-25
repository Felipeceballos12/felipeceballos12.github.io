import React from 'react';
import * as Separator from '@radix-ui/react-separator';

import { Description } from '../Description/Description';
import { experiences } from '../../lib/data';

import styles from './Experiences.module.css';
import themeStyles from '../../theme.module.css';

export default function Experiences() {
  return (
    <section id="experience" className={themeStyles.section}>
      <h2>Experience</h2>
      <div className={styles.container}>
        {experiences.map(
          (
            { id, startDate, endDate, rol, name, description },
            index
          ) => {
            const isLastItem = index < experiences.length - 1;

            return (
              <React.Fragment key={id}>
                <Description
                  startDate={startDate}
                  endDate={endDate}
                  rol={rol}
                  name={name}
                  description={description}
                />
                {isLastItem && (
                  <Separator.Root
                    className={styles.separatorRoot}
                    decorative
                  />
                )}
              </React.Fragment>
            );
          }
        )}
      </div>
    </section>
  );
}
