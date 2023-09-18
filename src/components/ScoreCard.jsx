import React from 'react'
import {ProgressBar} from './ProgressBar'


export const ScoreCard = (props) => {
  return (
    <div className="title-progressBar">
    <div className="score-descript">
       <h1 >Onpage Score </h1>
       <p>shows how page is optimized considering critical on-page issues and warnings detected</p>
    </div>
    <div>
      {props.score?
        <ProgressBar score={props.score} /> : ""}
    </div>
  </div>
  )
}
