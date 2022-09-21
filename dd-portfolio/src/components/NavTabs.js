import React from 'react';
import '../styles/reset.css';
import '../styles/style.css'
import resume from "./resume.pdf"
function NavTabs({currentPage, handlePageChange}) {
    return (
        <header>
      
        <section class="top">
            <h1>Sean Dillon</h1>
           
            <ul>
                <li>
                    <a 
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                        </a>
                </li>
                <li>
                    <a
                     href="#work"
                     onClick={() => handlePageChange('Work')}
                     className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                     >
                        Work
                        </a>
                </li>
                <li>
                    <a
                     href="#contact"
                     onClick={() => handlePageChange('Contact')}
                     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                     >
                        Contact
                        </a>
                </li>
                <li>
                    <a
                    download="resume.pdf"
                    href={resume}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </section>
       
        <section class="bottom">
        <h3 class="devious-doge"><span class="default">Devious Doge</span><span class="emoji">🐕</span></h3>
        </section>

    </header>
    )
}
export default NavTabs;