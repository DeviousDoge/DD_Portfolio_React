import React from 'react';
import dailyplanets from "./images/dailyplanets.png";
import winner from "./images/winner.png";
import schedule from "./images/scheduleronschedule.png";
import weather from "./images/weather.png";
import doge from "./images/Devious Doge.jpeg"
export default function Work() {
  return (
    <div id="work">
    <section class="block">
        <div class="left">
          <h2>Work</h2>
    </div>
        <div class="right">
         
        <figure class="big">
                
                <h4>Daily Planets</h4>
            <a href="https://deviousdoge.github.io/the-daily-planets-dd/">
          <img  src={dailyplanets} width="1500" height="1000" alt="Daily Planets"></img>
            </a>
         
          <div class="overlay">Daily Planets</div>
        </figure>
 
        <div class="small">
            <figure class="smallimage">
                <h4>Memey Code Quiz</h4>
                <a href="https://deviousdoge.github.io/code-quiz/">
             <img  src={winner} width="500" height="333" alt="Code Quiz"></img>
                </a>
            </figure>
           <figure class="smallimage">
                <h4>Workday Scheduler</h4>
                <a href="https://deviousdoge.github.io/work_day_scheduler/">
             <img  src={schedule} width="500" height="333" alt="Work Day Scheduler"></img>
                </a>
            </figure>
           <figure class="smallimage">
                <h4>Weather Dashboard</h4>
                <a href="https://deviousdoge.github.io/weather_dashboard/">
            <img  src={weather} width="500" height="333" alt="Weather Dashboard"></img>
                </a>
            </figure>
            <figure class="smallimage">
                <h4>Coming Soon?</h4>
                <a href="#">
            <img  src={doge} width="500" height="333" alt="Coming Soon"></img>
                </a>
            </figure>
        </div>
    </div>
    </section>
</div>
  );
}
