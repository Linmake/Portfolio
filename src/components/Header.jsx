import { useState, useEffect } from 'react';
import '../style/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
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
