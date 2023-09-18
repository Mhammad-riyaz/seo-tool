import React from 'react'

export const ChecksCard = (props) => {
  
  return (
    <div className='checks-card' >
        <p>{props.tag} <span>{props.value}</span> </p> 
    </div>
  )
}
