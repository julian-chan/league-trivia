import React from 'react';
import { useHistory } from 'react-router-dom';
import MainBanner from '../MainBanner/MainBanner';
import './Home.css';

function Home() {
  let history = useHistory();

  const handlePlayButtonClick = () => {
    history.push("/play");
  }

  return (
    <div className="Home">
      <MainBanner />
      <button className="PlayButton" onClick={handlePlayButtonClick}>
        Play!
      </button>
    </div>
  )
}

export default Home;