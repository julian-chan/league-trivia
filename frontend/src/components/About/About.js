import React from 'react';
import { useHistory } from 'react-router-dom';
import MainBanner from '../MainBanner/MainBanner';
import './About.css';

function About() {
  let history = useHistory();

  const handleBackHomeButtonClick = () => {
    history.push("/");
  }

  return (
    <div className="About">
      <MainBanner bannerText="About"/>
      <div className="BackHomeButtonContainer">
        <button className="BackHomeButton" onClick={handleBackHomeButtonClick}>
          Back Home
        </button>
      </div>
    </div>
  )
}

export default About;