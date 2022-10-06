import React from 'react';
import dailyplanets from "./images/dailyplanets.png";
import blackbook from "./images/blackbook.png";
import schedule from "./images/scheduleronschedule.png";
import weather from "./images/weather.png";
import arthub from "./images/arthub.png"

export default function Work() {
  return (
    <div id="work">
    <section class="block">
        <div class="left">
          <h2>Work</h2>
    </div>
        <div class="right">
         
        <figure class="big">
                <p>This was my first collaborative project. We combined NASA's Mars Rover API with a 3rd party news API to create an interactive app in which the user can search a day and be returned that days top news story and the best photos from one of mars rovers that we can find. I dont know many other websites where you can get data from two planets at the same time.</p>
                <a href="https://github.com/DeviousDoge/the-daily-planets-dd"><p>Github</p></a>
                <h4>Daily Planets</h4>
            <a href="https://deviousdoge.github.io/the-daily-planets-dd/">
          <img  src={dailyplanets} width="1500" height="1000" alt="Daily Planets"></img>
            </a>
         
          <div class="overlay">Daily Planets</div>
        </figure>
 
        <div class="small">
            <figure class="smallimage">
                <h4>Black Book</h4>
                <p class="description">This project is meant for bootcamp graduates to easily reference what they have learned via code snippets. </p>
                <a href="https://github.com/DeviousDoge/developer-hub-DD"><p class="description">Github</p></a>
                <a href="https://deviousdoge.github.io/code-quiz/">
             <img  src={blackbook} width="500" height="333" alt="Code Quiz"></img>
                </a>
            </figure>
           <figure class="smallimage">
                <h4>Workday Scheduler</h4>
                <p class="description">A fully functional color-coded daily planner app that utilizes moment.js and jquery</p>
                <a href="https://github.com/DeviousDoge/work_day_scheduler"><p class="description">Github</p></a>
                <a href="https://deviousdoge.github.io/work_day_scheduler/">
             <img  src={schedule} width="500" height="333" alt="Work Day Scheduler"></img>
                </a>
            </figure>
           <figure class="smallimage">
                <h4>Weather Dashboard</h4>
                <p class="description">In this app I use the OpenWeather API to retrieve weather for a given city.</p>
                <a href="https://github.com/DeviousDoge/weather_dashboard"><p class="description">Github</p></a>
                <a href="https://deviousdoge.github.io/weather_dashboard/">
            <img  src={weather} width="500" height="333" alt="Weather Dashboard"></img>
                </a>
            </figure>
            <figure class="smallimage">
                <h4>ArtHub-WIP</h4>
                <p class="description">Me and a small team are attempting to create a version control system for art projects. Work in progress.</p>
                <a href="https://github.com/DeviousDoge/arthub"><p class="description">Github</p></a>
                <a href="https://fierce-peak-37996.herokuapp.com/">
            <img  src={arthub} width="500" height="333" alt="Coming Soon"></img>
                </a>
            </figure>
        </div>
    </div>
    </section>
</div>
  );
}
