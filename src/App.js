import React, { useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <div className="App">
      <h1>React Animation On Scroll</h1>

      <br />
      <br />
      <br />
      <br />
      <div data-aos="zoom-in-down" className="container">
        1
      </div>
      <br />
      <br />
      <br />
      <br />
      <div data-aos="zoom-in-up" className="container">
        2
      </div>
      <br />
      <br />
      <br />
      <br />
      <div data-aos="fade-right" className="container">
        3
      </div> <br />
      <br />
      <br />
      <br />
      <div data-aos="fade-left" className="container">
        4
      </div>
      <br />
      <br />
      <br />
      <br />
      <div data-aos="flip-right" className="container">
        5
      </div> <br />
      <br />
      <br />
      <br />
      <div data-aos="flip-left" className="container">
        6
      </div>
      <br />
      <br />
      <br />
      <br />
      <div data-aos="zoom-in-up" className="container">
        7
      </div>
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
