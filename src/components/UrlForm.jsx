import React from "react";
import axios from "axios";

export const UrlForm = (props) => {
const [url,setUrl] = React.useState()
const [isInputEmpty,setIsInputEmpty] = React.useState(false)


  function handleClick(event) {
    const post_array = [];
    if(!url) setIsInputEmpty(true)
    else{
  props.setLoading(true)
  
  post_array.push({
    url: url,
    enable_javascript: true,
    enable_browser_rendering: true,
    custom_js: "meta = {}; meta.url = document.URL; meta;",
  });
  axios({
    method: "post",
    url: "https://api.dataforseo.com/v3/on_page/instant_pages",
    auth: {
      username: "riyazriyaz9493@gmail.com",
      password: "0d8010e7b5a847ac",
    },
    data: post_array,
    headers: {
      "content-type": "application/json",
    },
  })
  .then(function (response) {
        let result = response["data"]["tasks"];
        props.setApiData(result)
        window.scrollTo(0, 1758);
      })
      .catch(function (error) {
      });
    }
  }

  return (
    <div className="url-form">
        <div>
          <input
            required
            onChange={(event)=>setUrl(event.target.value)}
            type="text"
            className = {isInputEmpty?"placeholder-color url-input":"url-input"}
            placeholder={isInputEmpty? "Please enter the URL":"Place the URL"}
          />
        </div>
        <div>
          <button   onClick={ handleClick} type="submit"  className="submit-btn">
            SEND
          </button>
        </div>
    </div>
  );
};
