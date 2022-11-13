import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.sign}>
      <span className={styles.fastflicker}>Zeus</span>
      <span className={styles.flicker}>||Software||</span>
      <span className={styles.fastflicker}>Engineer</span>
    </div>
    </>
  );
}

export default Home;