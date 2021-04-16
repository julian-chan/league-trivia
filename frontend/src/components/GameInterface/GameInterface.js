import React, { useEffect, useState } from 'react';
import MainBanner from '../MainBanner/MainBanner';
import ConfirmEndGamePopup from '../ConfirmEndGamePopup/ConfirmEndGamePopup';
import GameStatisticsDisplay from '../GameStatisticsDisplay/GameStatisticsDisplay';
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay';
import AnswerChoicesDisplay from '../AnswerChoicesDisplay/AnswerChoicesDisplay';
import FeedbackDisplay from '../FeedbackDisplay/FeedbackDisplay';
import * as ConstantsUtils from '../utils';
import './GameInterface.css';

function GameInterface(props) {
  const [isEndGamePopupOpen, setIsEndGamePopupOpen] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [questionFromApi, setQuestionFromApi] = useState({});
  const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const toggleConfirmEndGamePopup = () => {
    setIsEndGamePopupOpen(!isEndGamePopupOpen);
  }

  const handleEndGameButtonClick = () => {
    toggleConfirmEndGamePopup();
  }

  const showOrHideEndGamePopup = () => {
    if (isEndGamePopupOpen) {
      return <ConfirmEndGamePopup handleClosePopup={toggleConfirmEndGamePopup}/>;
    }
  }

  const fetchNextQuestion = () => {
    fetch("/api/question").then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((responseJson) => {
      let questionData = {};
      questionData.questionType = responseJson.questionType;
      questionData.questionText = responseJson.questionText;
      questionData.answerChoices = responseJson.answerChoices;
      questionData.correctAnswerIndex = responseJson.correctAnswerIndex;
      questionData.correctAnswer = responseJson.answerChoices[responseJson.correctAnswerIndex];
      questionData.explanation = "explanation" in responseJson ? responseJson.explanation : "";
      setQuestionFromApi(questionData);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleAnswerChoice = (index) => {
    setHasSelectedAnswer(!hasSelectedAnswer);
    setSelectedAnswer(questionFromApi.answerChoices[index]);

    let answerChoiceKey = ConstantsUtils.determineAnswerChoiceKeyFromQuestionType(questionFromApi.questionType);
    setIsAnswerCorrect(questionFromApi.correctAnswer[answerChoiceKey] === questionFromApi.answerChoices[index][answerChoiceKey]);
  }

  const incrementCorrectAndQuestionCount = () => {
    setQuestionCount(questionCount + 1);
    setCorrectCount(correctCount + 1);
  }

  const incrementIncorrectAndQuestionCount = () => {
    setQuestionCount(questionCount + 1);
    setIncorrectCount(incorrectCount + 1);
  }

  const resetStateForNewQuestion = () => {
    setHasSelectedAnswer(false);
    setSelectedAnswer({});
    setIsAnswerCorrect(false);
  }

  const continueAfterViewingFeedback = () => {
    if (isAnswerCorrect) {
      incrementCorrectAndQuestionCount();
    } else {
      incrementIncorrectAndQuestionCount();
    }

    resetStateForNewQuestion();
    fetchNextQuestion();
  }

  const showOrHideFeedbackDisplay = () => {
    if (hasSelectedAnswer) {
      return <FeedbackDisplay questionType={questionFromApi.questionType} isCorrect={isAnswerCorrect} selectedAnswer={selectedAnswer} correctAnswer={questionFromApi.correctAnswer} handleContinue={continueAfterViewingFeedback} explanation={questionFromApi.explanation}/>
    }
  }

  const formatQuestionAndAnswerDisplayFromQuestionType = () => {
    if (Object.keys(questionFromApi).length === 0) {
      return null;
    }

    let questionDisplay;
    // These question types need to render images as part of the question
    if (ConstantsUtils.IMAGE_QUESTION_TYPES.has(questionFromApi.questionType)) {
      let imageDir = ConstantsUtils.QUESTION_TYPE_TO_QUESTION_IMAGE_DIR[questionFromApi.questionType];
      let imageKey = ConstantsUtils.QUESTION_TYPE_TO_IMAGE_KEY[questionFromApi.questionType];
      questionDisplay = <QuestionDisplay questionText={questionFromApi.questionText} questionImage={process.env.PUBLIC_URL + imageDir + questionFromApi.correctAnswer[imageKey]}/>;
    // These question types only need to render text as part of the question
    } else {
      questionDisplay = <QuestionDisplay questionText={questionFromApi.questionText} questionImage=""/>;
    }

    let answerChoicesDisplay = <AnswerChoicesDisplay questionType={questionFromApi.questionType} answerChoices={questionFromApi.answerChoices} handleAnswerChoice={handleAnswerChoice} hasSelectedAnswer={hasSelectedAnswer}/>;

    return (
      <div className="QuestionAndAnswerChoicesDisplay">
        {questionDisplay}
        {answerChoicesDisplay}
      </div>
    )
  }

  // Fetch the question when the component first renders
  useEffect(() => {
    fetchNextQuestion();
  }, []);

  return (
    <div className="GameInterface">
      <MainBanner />
      <button className="EndGameButton" onClick={handleEndGameButtonClick}>
        End Game
      </button>
      <GameStatisticsDisplay questionCount={questionCount} correctCount={correctCount}/>
      <div className="QuestionAnswerFeedbackDisplay">
        {formatQuestionAndAnswerDisplayFromQuestionType()}
        {showOrHideFeedbackDisplay()}
      </div>
      {showOrHideEndGamePopup()}
    </div>
  )
}

export default GameInterface;