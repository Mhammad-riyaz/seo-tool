import React from 'react'

export const Htag = (props) => {
  let keyCount =0
  const htagElements = props.values.map((value)=><p key={keyCount++} >{value}</p>)
  return (
        <div className='h-tag'>
            <h1>{props.tag}</h1>
            <div className='htag-values'>
              {htagElements}
            </div>
        </div>
  )
}
