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
    transform: inView
      ? 'scale(1)'
      : 'scale(0.93);',
    opacity: inView ? 1 : 0.35,
    config: { duration: 1500 },
  });

  return (
    <main>
      <div className="title-content">
        <Parallax pages={2} className="animation">
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="animation_layer parallax">
              <h1 className="title">Nicole Figueroa</h1>
              <h2 className="subtitle">Diseñadora web & programadora.</h2>
              <br />
              <animated.img
                ref={ref}
                src="/assets/foto.png"
                alt="img of desert"
                className="img"
                style={styles}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <div className="animation_layer parallax" id="star"></div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
