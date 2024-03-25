import photo from '../../../assets/photo.webp';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.professionContainer}>
      <img
        src={photo}
        className={styles.photo}
        alt="Felipe Ceballos"
      />
      <div className={styles.me}>
        <p className={styles.myName}>Felipe Ceballos</p>
        <p className={styles.profession}>Frontend Developer</p>
      </div>
    </div>
  );
}
