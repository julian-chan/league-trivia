import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as ConstantsUtils from '../utils';
import './AnswerChoicesDisplay.css';

function AnswerChoicesDisplay(props) {
  const [questionType, setQuestionType] = useState("");
  const [answerChoices, setAnswerChoices] = useState([]);
  const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);

  useEffect(() => {
    setQuestionType(props.questionType);
    setAnswerChoices(props.answerChoices);
    setHasSelectedAnswer(props.hasSelectedAnswer);
  }, [props.questionType, props.answerChoices, props.hasSelectedAnswer]);

  let answerChoiceKey = ConstantsUtils.determineAnswerChoiceKeyFromQuestionType(questionType);

  // If there is no question type yet, don't render anything
  if (questionType.length === 0) {
    return null;
  // These question types only need to render text for the answer choices
  } else if (ConstantsUtils.TEXT_ANSWER_CHOICES_QUESTION_TYPES.has(questionType)) {
    return (
      <div className="AnswerChoicesDisplay">
        {answerChoices.map((choice, index) => {
          return <button disabled={hasSelectedAnswer} key={"choice" + index} className="AnswerChoiceButton" onClick={() => props.handleAnswerChoice(index)}>{choice[answerChoiceKey]}</button>
        })}
      </div>
    )
  // These question types need to render images for the answer choices
  } else if (ConstantsUtils.IMAGE_ANSWER_CHOICES_QUESTION_TYPES.has(questionType)) {
    let imageDir = ConstantsUtils.QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR[questionType];
    return (
      <div className="AnswerChoicesDisplay">
        {answerChoices.map((choice, index) => {
          return <button disabled={hasSelectedAnswer} key={"choice" + index} className="AnswerChoiceButton" onClick={() => props.handleAnswerChoice(index)}>
            <img src={process.env.PUBLIC_URL + imageDir + choice[answerChoiceKey]} alt="Spell"/>
          </button>
        })}
      </div>
    )
  }
}

AnswerChoicesDisplay.propTypes = {
  // Type of question
  questionType: PropTypes.string.isRequired,
  // Array of answer choices (which themselves are dictionaries)
  answerChoices: PropTypes.array.isRequired,
  // Callback function when an answer is selected
  handleAnswerChoice: PropTypes.func.isRequired,
  // Whether an answer has already been selected
  hasSelectedAnswer: PropTypes.bool.isRequired
}

export default AnswerChoicesDisplay;