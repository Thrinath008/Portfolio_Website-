import { useState, useEffect } from 'react';
import './App.css';
import MoonIcon from './assets/moon.svg';
import SunIcon from './assets/sun.svg';
import LinkedInIcon from './assets/linkedin.svg';
import HomeIcon from './assets/home.svg';
import GitgubIcon from './assets/github.svg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update body class based on theme
  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      {/* Sidebar navigation */}
      <nav>
        <ul>
          <li className="nav-item">
            <img src={HomeIcon} alt="Home" />
          </li>
          <li className="nav-item">
            <a href="https://linkedin.com/in/saragada-thrinath-01a6b7283" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </li>
          <li className="nav-item">
            <a href='https://github.com/Thrinath008' target="_blank" rel="noopener noreferrer">
              <img src={GitgubIcon} alt="Github"/>
            </a>
          </li>
        </ul>
      </nav>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <img src={isDarkMode ? MoonIcon : SunIcon} alt="Toggle Theme" />
      </button>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <div className='div1'>
        <div className='div1-div1'>
          <h1>hi, I am thrinath</h1>
        </div>
        <div className='div1-div2'>
          <h1>hello div2</h1>
        </div>
      </div>
      <div className='div3'></div>
      <div className='div4'></div>
    </div>
  );
}

export default App;
