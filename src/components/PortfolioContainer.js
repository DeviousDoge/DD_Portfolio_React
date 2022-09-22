import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <a id="contact">
    <section class="block">
        <div class="left">
          <h2>Contact Me</h2>
    </div>
        <div class="right"> 
        <ul id="contacts">
          <li>Email: <a href="mailto:pdillon0@gmail.com">Pdillon0@gmail.com</a></li>
          <li>Phone: <a href="tel:904-728-8808">904-728-8808</a></li>
          <li>Github: <a href="https://github.com/DeviousDoge">DeviousDoge</a></li>
          <li>Discord: <a href="https://discord.com/channels/Devious Doge#9377">Devious Doge</a></li>
        </ul>
    </div>
   
    </section>
    </a>
    </div>
    
  );
}
