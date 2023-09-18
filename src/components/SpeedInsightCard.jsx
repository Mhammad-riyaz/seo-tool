import React from 'react'

export const SpeedInsightCard = (props) => {
  return (
    <div className='speedInsight-card'>
            <h1>{props.value}</h1>
        <p>{props.name}</p>
    </div>
  )
}
