import React from 'react'
import { SpeedInsightCard } from './SpeedInsightCard'

export  const SpeedInsights = (props) => {
  const insightElements = props.speedInfo.map((item)=> <SpeedInsightCard  key={item.value} value={item.value} name={item.name} />)
  return (
    <div className='speedInsights-container' >
        <h1>Speed Insights</h1>
        <div className='speedInsight-cards' >
        {insightElements}
        </div>
    </div>
  )
}
