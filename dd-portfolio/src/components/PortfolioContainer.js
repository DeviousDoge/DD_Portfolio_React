import React from 'react';
import '../styles/reset.css';
import '../styles/style.css'
function PortfolioContainer({currentPage, handlePageChange}) {
    return (
        <header>
      
        <section class="top">
            <h1>Sean Dillon</h1>
           
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </section>
       
        <section class="bottom">
        <h3 class="devious-doge"><span class="default">Devious Doge</span><span class="emoji">🐕</span></h3>
        </section>

    </header>
    )
}
export default PortfolioContainer;