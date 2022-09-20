import React from 'react';
import pfp from "./images/4F9EBB6F-22E8-4824-A6B2-B22740962E8C.jpeg"

export default function About() {
  return (
    <a id="about">
    <section class="block">
        <div class="left">
          <h2>About Me</h2>
    </div>
        <div class="right">
          <img id="me" src={pfp} alt="me" width="500" height="500"></img>
          <div class="pcontainer">
          <p>My name is Sean Dillon, and I am an aspiring fullstack web developer and software engineer operating under the alias 'Devious Doge'. I am currently attending the UPENN fullstack web development boot camp and am nearly done learning CSS. You can tell this by the fact that I have made this webpage using silly early 2000's web design skills. This portfolio will be updated as the scope of my web development knowledge increases. The 'work' section contains a few placeholder images for now. </p> 
          <p>I hope that once my skills as a web developer are more robust and I have found a stable position in the industry I can learn C# and create games on Unity in my spare time. C# will open additional doors in the fullstack web development careerpath as well and so this will undoubtedly be my clear next step in my coding journey. Any projects on Unity I begin to seriously attempt to tackle will without a doubt be featured on this portfolio. I am excited for the future of my career and this silly page will certainly become more impressive as time goes on!  </p>
          </div>
    </div>
    </section>
    </a>
  );
}
