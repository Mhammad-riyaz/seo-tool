import React from 'react'
import { UrlForm } from './UrlForm'
import IntroSection from './IntroSection'

export const LandingPage = (props) => {

  return (
    <div className="container">
        <IntroSection />
        <UrlForm setLoading={props.setLoading} setApiData={props.setApiData} />
    </div>
  )
}
