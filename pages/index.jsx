import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>LEARN</h1>
          <h3>EXPERIMENT</h3>
          <h2>IMPLEMENT</h2>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Sahil Sonawane</h1>
            <h6 className={styles.bio}>Competitive Programmer, Web Developer, and Machine Learning Enthusias</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
