import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as ConstantsUtils from '../utils';
import './FeedbackDisplay.css';

function FeedbackDisplay(props) {
  const [questionType, setQuestionType] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [explanation, setExplanation] = useState({});

  const victoryLogoPath = process.env.PUBLIC_URL + "/victory_logo.png";
  const defeatLogoPath = process.env.PUBLIC_URL + "/defeat_logo.png";

  let feedbackLogoToUse;
  if (isCorrect) {
    feedbackLogoToUse = (
      <div className="FeedbackLogoContainer">
        <img className="FeedbackLogo" src={victoryLogoPath} alt="Victory Logo"/>
      </div>
    );
  } else {
    feedbackLogoToUse = (
      <div className="FeedbackLogoContainer">
        <img className="FeedbackLogo" src={defeatLogoPath} alt="Defeat Logo"/>
      </div>
    );
  }

  let answerChoiceKey = ConstantsUtils.determineAnswerChoiceKeyFromQuestionType(questionType);
  let correctAnswerDisplay;
  let selectedAnswerDisplay;
  // These question types rendered text for the answer choices
  if (ConstantsUtils.TEXT_ANSWER_CHOICES_QUESTION_TYPES.has(questionType)) {
    correctAnswerDisplay = correctAnswer[answerChoiceKey];
    selectedAnswerDisplay = selectedAnswer[answerChoiceKey];
  // These question types rendered images for the answer choices
  } else if (ConstantsUtils.IMAGE_ANSWER_CHOICES_QUESTION_TYPES.has(questionType)) {
    let imageDir = ConstantsUtils.QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR[questionType];
    correctAnswerDisplay = <img src={process.env.PUBLIC_URL + imageDir + correctAnswer[answerChoiceKey]} alt="Correct"/>;
    selectedAnswerDisplay = <img src={process.env.PUBLIC_URL + imageDir + selectedAnswer[answerChoiceKey]} alt="Selected"/>;
  }

  // Render an explanation if it came along with the question
  let explanationText = explanation.length > 0 ? <div className="ExplanationText">{explanation}</div> : null;

  let feedbackText;
  if (isCorrect) {
    feedbackText = (
      <div className="FeedbackText">
        <div className="AnswerTextContainer">
          <div className="CorrectText">Correct</div>
          <div>
            <span>Your Answer:</span>
            <span className="CorrectAnswerText">{correctAnswerDisplay}</span>
          </div>
        </div>
        {explanationText}
      </div>
    );
  } else {
    feedbackText = (
      <div className="FeedbackText">
        <div className="AnswerTextContainer">
          <div className="IncorrectText">Incorrect</div>
          <div>
            <span>Your Answer:</span>
            <span className="IncorrectAnswerText">{selectedAnswerDisplay}</span>
          </div>
          <div>
            <span>Correct Answer:</span>
            <span className="CorrectAnswerText">{correctAnswerDisplay}</span>
          </div>
        </div>
        {explanationText}
      </div>
    );
  }
  
  useEffect(() => {
    setQuestionType(props.questionType);
    setIsCorrect(props.isCorrect);
    setSelectedAnswer(props.selectedAnswer);
    setCorrectAnswer(props.correctAnswer);
    setExplanation(props.explanation);
  }, [props.questionType, props.isCorrect, props.selectedAnswer, props.correctAnswer, props.explanation]);

  return (
    <div className="FeedbackDisplay">
      {feedbackLogoToUse}
      <div className="FeedbackTextAndContinueButtonContainer">
        {feedbackText}
        <button className="ContinueButton" onClick={props.handleContinue}>Continue</button>
      </div>
    </div>
  )
}

FeedbackDisplay.propTypes = {
  // Type of question
  questionType: PropTypes.string.isRequired,
  // Whether the answer was correct or not
  isCorrect: PropTypes.bool.isRequired,
  // The answer selected by the user
  selectedAnswer: PropTypes.object.isRequired,
  // The correct answer
  correctAnswer: PropTypes.object.isRequired,
  // Explanation text
  explanation: PropTypes.string.isRequired,
  // Callback function to continue
  handleContinue: PropTypes.func.isRequired
}

export default FeedbackDisplay;