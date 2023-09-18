import React from 'react'
import { Htag } from './Htag'
export const Htags = (props) => {
  
  const tags = Object.entries(props.htags)

  const htagElements = tags.map(([key ,values])=> values!=null? <Htag  key={key} tag={key} values={values} />:"")

  return (
    <div className='htags-container' >
        <h1>H tags</h1>
      <div className="h-tags">
    {htagElements}
      </div>
    </div>
  )
}
