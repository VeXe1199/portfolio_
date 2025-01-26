import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const AboutPage = () => {
  const codeString = `
  const AboutPage = () => {
    return (
      <>
        <h3>- Undergraduate Student at Indian Institute of Information Technology Allahabad</h3>
        <h3>- Competitive Programmer and Developer</h3>
        <h3>- Languages: C++, C, JavaScript, TypeScript , Java , SQL</h3>
        <h3>- Frameworks: C++ STL, ReactJS, ExpressJS, LaTeX</h3>
        <h3>- Web Development Tools: HTML, CSS, Node.js, Git, GitHub, Linux</h3>
        <h3>- Databases & Tools: MongoDB, Relational Database (RDBMS) - SQL/MySQL, GraphQL</h3>
      </>
    );
  };


  `;

  return (
    <div style={{ padding: '20px', backgroundColor: '#282a36', borderRadius: '10px' }}>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
