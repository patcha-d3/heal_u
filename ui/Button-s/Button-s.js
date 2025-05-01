import styles from './Button-s.module.css';

export default function SmallButton({ onClick, tooltip }) {
  return (
    <button className={styles.button} onClick={onClick} title={tooltip}>
      ?
    </button>
  );
}
