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
      audioFileName: 'slut_dragon.mp3',
      audioLabel: 'Slut Dragon',
      audioDescription: 'We are the slut dragons, who live in this slut cave, where we suck, fuck and eat butt.',
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