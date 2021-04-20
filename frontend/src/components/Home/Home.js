import React from 'react';
import { useHistory } from 'react-router-dom';
import MainBanner from '../MainBanner/MainBanner';
import './Home.css';

function Home() {
  let history = useHistory();

  const handlePlayButtonClick = () => {
    history.push("/play");
  }

  const handleAboutButtonClick = () => {
    history.push("/about");
  }

  return (
    <div className="Home">
      <MainBanner bannerText="League of Legends Trivia"/>
      <div className="LeagueMapImageContainer">
        <img className="LeagueMapImage" src={process.env.PUBLIC_URL + "map.png"} alt="LeagueMap"/>
      </div>
      <div className="PlayButtonContainer">
        <button className="PlayButton" onClick={handlePlayButtonClick}>
          Play!
        </button>
      </div>
      <div className="AboutButtonContainer">
        <button className="AboutButton" onClick={handleAboutButtonClick}>
          About
        </button>
      </div>
    </div>
  )
}

export default Home;