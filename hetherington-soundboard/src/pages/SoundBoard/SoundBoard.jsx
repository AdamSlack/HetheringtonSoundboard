import React from 'react';
import { SoundBoardButton } from '../../components/SoundBoardButton';

import './SoundBoard.css';

export const SoundBoard = () => {

  // const sounds = [
  //   {
  //     audioFileName: 'i_am_mr_nimbus.mp3',
  //     audioLabel: 'I am Mr.Nimbus!',
  //     audioDescription: 'It is like Mr.Nimbus is by your side.'
  //   }
  // ]

  const sounds = Array.from({ length: 10 }, (_, idx) => ([
    {
      audioFileName: 'i_am_mr_nimbus.mp3',
      audioLabel: 'I am Mr.Nimbus!',
      audioDescription: 'It is like Mr.Nimbus is by your side.',
      key: `button_a_${idx}`
    },
    {
      audioFileName: 'lol_what.mp3',
      audioLabel: 'I don\'t even know',
      audioDescription: 'You\'re gonna have to tell me what this means.',
      key: `button_b_${idx}`
    }
  ])).flat();


  const soundBoardButtons = sounds.map((props) => <SoundBoardButton {...props}/>);

  return (
    <div className="sound-board-button-container">
      {soundBoardButtons}
    </div>
  )
}