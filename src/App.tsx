import './App.css';
import themeStyles from './theme.module.css';
import { Provider as ThemeProvider } from './state/Theme';

import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Experiences from './components/Experiences/Experiences';
import {
  SiGithub,
  SiLinkedin,
  //SiGoogledocs,
} from './lib/Icons/Icons';

function InnerApp() {
  return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <div className="content">
          <section className={`${themeStyles.section} home`}>
            <div className="badge">
              <div className="ellipse"></div>
              <span>Available to work</span>
            </div>
            <div className="heading">
              <h1>Luis Felipe Ceballos Caicedo</h1>
              <h1 className="secondHeading">Frontend Developer</h1>
            </div>

            <p className="introductionText">
              I'm Felipe Ceballos, a Frontend Developer with 3 years
              of experience. I specialize in JavaScript, TypeScript,
              and React to build high-quality web solutions. I'm also
              skilled in React Native for versatile web and mobile
              experiences. Let's create something great together!
            </p>

            <div className="callActionContainer">
              <a
                href="https://www.linkedin.com/in/luisfelipeceballos/"
                className="callAction"
                target="_blank"
              >
                <SiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              {/* <a href="#" className="callAction" target="_blank">
                <SiGoogledocs size={16} />
                <span>CV</span>
              </a> */}
              <a
                href="https://github.com/Felipeceballos12"
                className="callAction"
                target="_blank"
              >
                <SiGithub size={16} />
                <span>Github</span>
              </a>
            </div>
          </section>
          <Projects />
          <Experiences />
          <Skills />
          <Footer />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
}

export default App;
