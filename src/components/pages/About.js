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
          <p>My name is Sean Dillon. I am a fullstack web developer and software engineer operating under the alias 'Devious Doge'. I am knowledgeable in HTML, CSS, JavaScript, Node, SQL, Jquery, React, MongoDB, and some C#. I intend to continue broadening the scope of my knowledge and never stop learning. </p>
          <p>As a hobby I am interested in game development through the unity platform, and through that journey hope to develop skills in story telling, graphic design, synthetic music, and game design. I am based in the South Florida area and am open to employment as a web developer. </p>
          </div>
    </div>
    </section>
    </a>
  );
}
