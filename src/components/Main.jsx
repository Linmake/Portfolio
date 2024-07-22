import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../style/Main.css'

export default function Main() {
  return (
    <main>
      <div className="title-content">
        <Parallax pages={2} className="animation" style={{ top: '11%', left: '0' }}>
          <ParallaxLayer offset={0} speed={0.2} >
            <div className="animation_layer parallax">
              <h1 className="title">Nicole Figueroa</h1>
              <h2 className="subtitle">Diseñadora web & programadora.</h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="animation_layer parallax" id="star"></div>
          </ParallaxLayer>
        </Parallax >
      </div>
    </main>
  )
}
