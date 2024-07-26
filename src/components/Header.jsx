import '../style/Header.css'

export default function Header({ scrollY }) {

  const headerStyle = {
    backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <header style={headerStyle} >
        <img src="/assets/NF.webp" className="logo" alt="loco-principal" />
        <nav>
          <ol className="row-list">
            <li>
              <a href="#" className="link-page">
                <span className="li-span">01. </span>About
              </a>
            </li>
            <li>
              <a href="" className="link-page">
                <span className="li-span">02. </span>Proyects
              </a>
            </li>
            <li>
              <a href="" className="link-page">
                <span className="li-span">03. </span>Contact
              </a>
            </li>
          </ol>
        </nav>
      </header >
    </>
  )
}