import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as ConstantsUtils from '../utils';
import './GameStatisticsDisplay.css';

function GameStatisticsDisplay(props) {
  const [questionCount, setQuestionCount] = useState(props.questionCount);
  const [correctCount, setCorrectCount] = useState(props.correctCount);
  const [currentRank, setCurrentRank] = useState(ConstantsUtils.determineRankGivenPerformance(questionCount, correctCount));

  useEffect(() => {
    setQuestionCount(props.questionCount);
    setCorrectCount(props.correctCount);
    setCurrentRank(ConstantsUtils.determineRankGivenPerformance(props.questionCount, props.correctCount));
  }, [props.questionCount, props.correctCount]);

  return (
    <div className="GameStatisticsDisplay">
      <div className="StatisticRowsContainer">
        <p className="StatisticRow"># Questions: {questionCount}</p>
        <p className="StatisticRow"># Correct: {correctCount}</p>
        <p className="StatisticRow"># Incorrect: {questionCount - correctCount}</p>
      </div>
      <div className="RankImageAndTextContainer">
        <img className="RankImage" src={process.env.PUBLIC_URL + ConstantsUtils.RANK_TO_EMBLEM_IMAGE[currentRank]} alt="Rank"/>
        <div className="RankText">{currentRank}</div>
      </div>
    </div>
  )
}

GameStatisticsDisplay.propTypes = {
  // Number of questions answered
  questionCount: PropTypes.number.isRequired,
  // Number of questions answered correctly
  correctCount: PropTypes.number.isRequired
}

export default GameStatisticsDisplay;
