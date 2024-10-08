import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='container'>
      <Main />
    </div>
  );
}
export default App;