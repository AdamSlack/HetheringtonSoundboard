import React from 'react';
import './SoundBoardButton.css';

export const SoundBoardButton = (props) => {

  const {
    audioFileName,
    audioLabel,
    audioDescription,
  } = props;

  const sound = new Audio(`./audio/${audioFileName}`);

  const handleOnClick = () => {
    sound.play();
  }

  return (
    <button
      onClick={handleOnClick}
      className="sound-board-button"
      title={audioDescription}
    >
      {audioLabel}
    </button>
  )
}