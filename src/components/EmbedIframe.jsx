import React from 'react'
import copyToClipboard from 'react-copy-to-clipboard'
import embedIcon from "../assets/embed-icon.png"
import copyIcon from "../assets/copy.png"

export const EmbedIframe = () => {
    const [isEmbed,setIsEmbed] = React.useState(false)
    let iframeText = `<iframe src="https://seo-report.netlify.app/" width="800" height="600" frameborder="0"></iframe>`

    function handleClick(){
        setIsEmbed((prev)=>!prev)
        setTimeout(() => {
            setIsEmbed(false)
        }, 5000);
    }
    function copyToClipboard(){
        navigator.clipboard.writeText(iframeText)
    }
  return (
    <div className="embed">
        <div style={{display:!isEmbed?'none':''}}  className="iframe-container"  >
            <img onClick={copyToClipboard}
              className="copy-icon"
              src={copyIcon}
            />
            <input
              type="text"
              disabled
              value={iframeText}
            />
        </div>
        <button  onClick={handleClick} className="embed-btn">
          <img 
            className="embed-icon"
            src={embedIcon  }
          />
          Embed
        </button>
      </div>
  )
}
