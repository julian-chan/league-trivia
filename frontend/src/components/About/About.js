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
      <p className="PatchText">
        League Trivia includes data up to patch <a href="https://na.leagueoflegends.com/en-us/news/game-updates/patch-11-9-notes/" className="PatchVersionText">11.9</a>.
      </p>
    </div>
  )
}

export default About;