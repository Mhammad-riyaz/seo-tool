import React from 'react'

export const ResultCard = (props) => {
  return (
    <div  className='result-card' >
        <h1>{props.value}</h1>
        <p>{props.tag}</p>
    </div>
  )
}
