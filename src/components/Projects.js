import React, { Component } from 'react';
import bookstore from '../img/bookstore.png';
import newsweek from '../img/newsweek4.png';
import resto from '../img/resto2.png';
import weather from '../img/weather1.png';
import events from '../img/events3.png';
import calculator from '../img/calculator.png';
import face from '../img/face2.png';
import capstone from '../img/capstone.png';

class Projects extends Component {

  render() {
    return (
      <div className="container">
        <hr />
        <br />
        <div className="row">
          <div className="col-12 text-center selected"><p>SELECTED WORK</p></div>
        </div>

        <div className="row">
        
          <div className="col-md-6 col-sm-12 columnas">

          <div>
              <div className="img img2">
                  <img    
                    alt='bookstore'
                    width = '80%'
                    height = '80%'
                    src={bookstore}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                        <p>React, Redux, CSS, and Bootstrap</p>
                        <p>BOOKSTORE APP - 
                          <a target="_blank" rel="noopener noreferrer" href="https://bookstore-g.herokuapp.com/"> DEMO LINK -</a>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/reactBookStore/"> GITHUB</a>
                        </p>
                        <p>A Book Store app </p>
                      </div>
                    </div>
                  </div>
            </div>

            <div>
              <div className="img img2">
                  <img    
                    alt='events app'
                    width = '80%'
                    height = '80%'
                    src={events}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                        <p>Ruby on Rails</p>
                        <p>EVENTS APP - 
                          <a target="_blank" rel="noopener noreferrer" href="https://associations-rails.herokuapp.com/"> DEMO LINK -</a>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/railsAssociations"> GITHUB</a>
                        </p>
                        <p>An App that behaves similar to Eventbrite.</p>
                      </div>
                    </div>
                  </div>
            </div>
            <div>
              
              <div className="img img2">
                <img    
                    alt='newsweek'
                    width = '80%'
                    height = '80%'
                    src={newsweek}
                  />
                  <div class="background-gradient">
                    <div class="text-img">
                      <p>HTML - CSS3</p>
                      <p>NEWSWEEK - 
                         <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/HMTL5BOOTSTRAPNewsweek/"> DEMO LINK - </a>
                         <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/HMTL5BOOTSTRAPNewsweek">GITHUB</a>
                      </p>
                      <p>This project is based on the Newsweek site.</p>
                    </div>
                  </div>
                </div>              
            </div>

            <div>
              <div className="img img2">
                  <img    
                    alt='restaurant'
                    width = '80%'
                    height = '80%'
                    src={resto}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                        <p>JavaScript</p>
                        <p>RESTAURANT PAGE - 
                          <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavascriptRestaurantPage/"> DEMO LINK -</a>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/javascriptrestaurantpage"> GITHUB</a>
                        </p>
                        <p>The entire content is generated with JavaScript.</p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          {/* ------ */}
          <div className="col-md-6 col-sm-11 columnas">
           
          <div>
              <div className="img img2">
                  <img    
                    alt='restaurant app'
                    width = '80%'
                    height = '80%'
                    src={capstone}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                        <p>React, Redux, API, CSS, and Bootstrap</p>
                        <p>RESTAURANT APP - 
                          <a target="_blank" rel="noopener noreferrer" href="https://reactcapstonegon.herokuapp.com/"> DEMO LINK -</a>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/reactCapstoneProject/tree/master"> GITHUB</a>
                        </p>
                        <p>A Restaurant app that pulls the data from the MealsDB API. </p>
                      </div>
                    </div>
                  </div>
            </div>

            <div>
              <div className="img img2">
                  <img    
                    alt='facebookapp'
                    width = '80%'
                    height = '80%'
                    src={face}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                        <p>Ruby on Rails - JavaScript</p>
                        <p>FACEBOOKAPP - 
                          <a target="_blank" rel="noopener noreferrer" href="https://bookfaces1.herokuapp.com/"> DEMO LINK -</a>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/railsfacebookapp"> GITHUB</a>
                        </p>
                        <p>A simple Facebook app.</p>
                      </div>
                    </div>
                  </div>
                  </div>

            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavaScriptWeatherApp/">
                <div className="img img2">
                 <img    
                    alt='weather'
                    width = '80%'
                    height = '80%'
                    src={weather}
                  />
                  <div class="background-gradient">
                    <div class="text-img">
                      <p>JavaScript - Bootstrap</p>
                      <p>WEATHER APP - 
                        <a target="_blank" rel="noopener noreferrer" href="https://gonjavi.github.io/JavaScriptWeatherApp/"> DEMO LINK - </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/javascriptweatherapp">GITHUB</a>
                      </p>
                      <p>A weather app that pulls from the OpenWeather API.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
         
            <div>
              <div className="img img2">
                  <img    
                    alt='calculator'
                    width = '80%'
                    height = '80%'
                    src={calculator}
                  />
                    <div class="background-gradient">
                      <div class="text-img">
                        <p>React - CSS3</p>
                        <p>CALCULATOR - 
                        <a target="_blank" rel="noopener noreferrer" href="https://gonreactapp.herokuapp.com/"> DEMO LINK - </a>
                         <a target="_blank" rel="noopener noreferrer" href="https://github.com/gonjavi/reactcalculator/">GITHUB</a>
                        </p>
                        <p>A calculator app built with React.</p>
                      </div>
                    </div>
                  </div>
            </div>
            
           
          </div>

        </div>
        
      </div>
    )
  }
}

export default Projects;
