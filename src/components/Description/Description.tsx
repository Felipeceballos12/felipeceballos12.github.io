import styles from './Description.module.css';

export function Description({
  startDate,
  endDate,
  rol,
  name,
  description,
}: {
  startDate: string;
  endDate: string;
  rol?: string;
  name: string;
  description?: string[];
}) {
  return (
    <article className={styles.container}>
      <div className={styles.date}>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className={styles.jobDescription}>
        <div className={styles.companyDescription}>
          <p>{name}</p>
          {rol && <p>{rol}</p>}
        </div>
        {description && (
          <ExperiencesDescription description={description} />
        )}
      </div>
    </article>
  );
}

function ExperiencesDescription({
  description,
}: {
  description: string[];
}) {
  const hasOneParagraph = description.length <= 1;

  return (
    <>
      {description.map((text) => {
        const key = crypto.randomUUID();

        if (hasOneParagraph) {
          return (
            <p key={key} className={styles.rolDescription}>
              {text}
            </p>
          );
        }

        return (
          <ul key={key}>
            <li className={styles.rolDescription}>{text}</li>
          </ul>
        );
      })}
    </>
  );
}
