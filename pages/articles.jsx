import styles from '../styles/ArticlesPage.module.css';

const ResumePage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}></h3>
      <iframe
        src="https://drive.google.com/file/d/15qVGk8z8M0JzxMlb4mR0U7shD5MZdWNJ/preview"
        title="Resume"
        className={styles.iframe} // Apply the CSS module class
      ></iframe>
    </div>
  );
};


export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
    revalidate: 60,
  };
}

export default ResumePage;
