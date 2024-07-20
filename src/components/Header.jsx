import '../style/Header.css'
export default function Header() {
  return (
    <>
      <header>
        <img src="../../public/assets/NF.png" className="logo" alt="" />
        <nav>
          <ol className="row-list">
            <li>
              <a href="" className="link-page">
                <span className="li-span">01. </span>About
              </a>
            </li>
            <li>
              <a href="" className="link-page">
                <span className="li-span">02. </span>Work
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