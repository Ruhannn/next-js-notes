import styles from "./loading.module.css";
export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <span className={styles.loader}></span>
    </div>
  );
}
