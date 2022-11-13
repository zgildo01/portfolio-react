import styles from './Home.module.css'

const Home = () => {
  return (
    <>
    <div className={styles.main}>
      <div className='sign'>
        <span className="fastflicker">Zeus</span>
        <span className="flicker">||Software||</span>
        <span className="fastflicker">Engineer</span>
      </div>
    </div>
    </>
  );
}

export default Home;