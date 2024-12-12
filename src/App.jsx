import { useState } from 'react';
import './App.css';
import MoonIcon from './assets/moon.svg';
import SunIcon from './assets/sun.svg';
import LinkedInIcon from './assets/linkedin.svg';
import HomeIcon from './assets/home.svg';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    };

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

                </div>
                <div className='div1-div2'>
                    
                </div>
            </div>
            <div className='div3'>

            </div>
            <div className='div4'>

            </div>
        </div>
        
        
        
    );
}

export default App;
