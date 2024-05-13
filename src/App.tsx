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
              I’m Felipe Ceballos, a Frontend Developer with over 2
              years of experience, specialised in JavaScript,
              TypeScript, and React. I have designed and implemented
              high-quality web solutions, as well as complex mobile
              applications using React Native and Expo. This dual
              competency allows me to seamlessly integrate advanced
              functionalities between web and mobile platforms.
              Additionally, my experience spans a wide range of
              technologies, including Git, HTML, CSS, Figma, UI, UX,
              NodeJS, Jest, Testing Library, Python, Kubernetes,
              Django, and MongoDB. Let's create something great
              together!
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
