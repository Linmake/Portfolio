import '../style/Header.css'
export default function Header() {
  return (
    <>
      <header>
        <img src="/assets/NF.png" className="logo" alt="loco-principal" />
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