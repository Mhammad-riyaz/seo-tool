import React, { useDebugValue, useEffect } from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import ReportSection from "./components/ReportSection";
import { EmbedIframe } from "./components/EmbedIframe";
import ClipLoader from "react-spinners/ClipLoader";
import { Error } from "./components/Error";

export const App = () => {
  const [apiData, setApiData] = React.useState();
  const [loading,setLoading] = React.useState(false)
  const [render,setRender] = React.useState(false)

  const override={
    display: "block",
  margin: "0 auto",
  }

  useEffect(()=>{
    setLoading(false)
    if(apiData && apiData[0].status_code!=20000) setRender(false)
    else if(apiData) setRender(true)
},[apiData])

if(loading) window.scrollTo(0,850)
  return (
    <>
      <LandingPage apiData={apiData} setLoading={setLoading} setApiData={setApiData} />
      {loading ?
      <div className="loader"><ClipLoader
        color={'black'}
        loading={loading}
        cssOverride={override}
        size={250}
        
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>
      :render?<ReportSection apiData={apiData} /> :apiData?<Error/>:""}
      <EmbedIframe/>
    </>
  );
};
