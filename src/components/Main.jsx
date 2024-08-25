// Main.jsx
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import '../style/Main.css';
import '../style/Header.css'

function Header() {
  return (
    <header>
      <img src="/assets/NF.webp" className="logo" alt="logo" />
      <nav>
        <ol className="row-list">
          <li>
            <a href="#" className="link-page">
              <span className="li-span">01. </span>About
            </a>
          </li>
          <li>
            <a href="#" className="link-page">
              <span className="li-span">02. </span>Proyects
            </a>
          </li>
          <li>
            <a href="#" className="link-page">
              <span className="li-span">03. </span>Contact
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default function Main() {
  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: false,
    threshold: 0.40,
  });

  const AboutAnimationStyle = useSpring({
    transform: inViewAbout ? 'scale(1)' : 'scale(0.97)',
    config: { duration: 850 },
  });

  return (
    <>
      <Header />
      <main>
        <div className="content">
          <Parallax pages={3} className="animation">
            <ParallaxLayer offset={0} speed={0.2}>
              <div className="animation_layer parallax">
                <div id="content-1">
                  <div id="intro-content">
                    <div id="welcome-content">
                      <h3>Bienvenido a mi Portafolio</h3>
                    </div>
                    <div id="title-content">
                      <h1 className="title">Hola soy Nicole Web </h1>
                      <h2 className="title">Developer</h2>
                    </div>
                  </div>
                  <div id="portImageCont">
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.2}>
              <animated.div id="about-content" ref={refAbout} style={AboutAnimationStyle}>
                <div id="text-about-content">
                  <h1 id="about-h1"> <span className="num-parallax">01.</span> About me</h1>
                  <p id="about-p">
                    I’m a passionate software developer who loves problem-solving and continuous learning. My journey into programming began with a high school project where I first encountered coding and was instantly hooked.
                  </p>
                  <p id="about-p">
                    In my professional career, I specialize in front-end development with React and Vue.js, as well as back-end development with Node.js.
                  </p>
                  <p id="about-p">
                    Outside of work, I enjoy building personal projects and staying on top of the latest tech trends.
                  </p>
                  <p id="about-p">
                    Feel free to explore my work and reach out if you’d like to collaborate or just chat about the latest in tech!
                  </p>
                </div>
                <div className="content-img">
                  <img
                    data-main-image
                    src="../../public/assets/me.webp"
                    alt="img of desert"
                    className="me-img"
                  />
                </div>
              </animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.2}>
              <div id="content-3">
                <div className="card-proyect-content">
                  <div className="image-card">
                    <img
                      src=""
                      alt=""
                      className="proyect-img"
                    />
                  </div>
                  <div className="info-card">
                    <div className="tecnology-content">
                      <div className="tecnology" id="tec1">React</div>
                      <div className="tecnology" id="tec1">Node</div>
                      <div className="tecnology" id="tec1">MongoDB</div>
                      <div className="tecnology" id="tec1">Styled comp</div>
                      <div className="tecnology" id="tec1">Sass</div>
                    </div>
                    <div className="text-content">
                      <h3 className="title-proyect">Notes</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas eligendi animi. Corporis, facere ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quae aperiam obcaecati?</p>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </main>
    </>
  );
}
