import OpenInMenu from '../../assets/Icons/open-in-new.svg?react';
import styles from './Card.module.css';

export default function Card({
  name,
  image,
  description,
  stack,
  link,
}: {
  name: string;
  image: string;
  description: string;
  stack: string[];
  link: string;
}) {
  return (
    <article className={styles.card}>
      <img
        className={styles.imageCard}
        src={image}
        alt={name}
        width={500}
        height={326}
        loading="lazy"
      />

      <div>
        <div className={styles.titleAndBtnContainer}>
          <p className={styles.titleCard}>{name}</p>
          <a
            href={link}
            className={styles.projectLink}
            target="_blank"
          >
            View Code
            <OpenInMenu width={14} height={14} />
          </a>
        </div>
        <p className={styles.descriptionCard}>{description}</p>
        <div className={styles.badgeContainer}>
          {stack.map((item) => (
            <Badge key={item} name={item} />
          ))}
        </div>
      </div>
    </article>
  );
}

function Badge({ name }: { name: string }) {
  return (
    <span className={`${styles.badgeText} ${styles.badge}`}>
      {name}
    </span>
  );
}
