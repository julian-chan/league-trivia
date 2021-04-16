import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './QuestionDisplay.css';

function QuestionDisplay(props) {
  const [questionText, setQuestionText] = useState("");
  const [questionImage, setQuestionImage] = useState("");

  useEffect(() => {
    setQuestionText(props.questionText);
    setQuestionImage(props.questionImage);
  }, [props.questionText, props.questionImage]);

  // If there is no question text yet, don't render anything
  if (questionText.length === 0) {
    return null;
  // If there is question text but no image, then just render the question text
  } else if (questionImage.length === 0) {
    return (
      <div className="QuestionDisplay">
        <div className="QuestionText">{questionText}</div>
      </div>
    )
  // Otherwise, render both the question text and the image
  } else {
    return (
      <div className="QuestionDisplay">
        <div className="QuestionText">
          {questionText}
        </div>
        <img className="QuestionImage" src={questionImage} alt="Question"/>
      </div>
    )
  }
}

QuestionDisplay.propTypes = {
  // Text of the question
  questionText: PropTypes.string.isRequired,
  // Full path of the image file to include with the question
  questionImage: PropTypes.string
}

QuestionDisplay.defaultProps = {
  // Default to empty string if the full path of the image file to include with the question is not passed in
  questionImage: ""
}

export default QuestionDisplay;