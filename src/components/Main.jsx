import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import '../style/Main.css';

export default function Main() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ejecutar solo una vez
    threshold: 0.35, // Umbral de visibilidad
  });

  const styles = useSpring({
    width: inView ? `960px` : `860px`,
    config: { duration: 1500 },
  });

  return (
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
                  <img id="astro" src="../../public/assets/header-img.svg" alt="" />
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <div id="content-2">
              <animated.div id="about-content" ref={ref}>
                <div id="text-about-content">
                  <h1 id="about-h1"> <span className="num-parallax">01.</span> About me</h1>
                  <p id="about-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, id quia quidem perferendis est consequuntur quaerat adipisci eum et voluptatem vitae quis blanditiis nulla quisquam, sunt reiciendis nihil placeat.</p>
                </div>
                <img
                  data-main-image
                  src="/assets/me.webp"
                  alt="img of desert"
                  className="me-img"
                  style={styles}
                />
              </animated.div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}>
            <div id="content-3">
              <div className="card-proyect-content">
                <img></img>
                <div className="info-card">
                  <div className="tecnology-content">
                    <div className="tecnology" id="tec1">React</div>
                    <div className="tecnology" id="tec1">Node</div>
                    <div className="tecnology" id="tec1">Mongo</div>
                  </div>
                  <h1>Notes</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas eligendi animi. Corporis, facere ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quae aperiam obcaecati?</p>
                </div>
              </div>
              <div className="card-proyect-content">
                <img></img>
                <div className="info-card">
                  <div className="tecnology-content">
                    <div className="tecnology" id="tec1">React</div>
                    <div className="tecnology" id="tec1">Node</div>
                    <div className="tecnology" id="tec1">Mongo</div>
                  </div>
                  <h1>Notes</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas eligendi animi. Corporis, facere ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quae aperiam obcaecati?</p>
                </div>
              </div>
              <div className="card-proyect-content">
                <img></img>
                <div className="info-card">
                  <div className="tecnology-content">
                    <div className="tecnology" id="tec1">React</div>
                    <div className="tecnology" id="tec1">Node</div>
                    <div className="tecnology" id="tec1">Mongo</div>
                  </div>
                  <h1>Notes</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas eligendi animi. Corporis, facere ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quae aperiam obcaecati?</p>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main >
  );
}