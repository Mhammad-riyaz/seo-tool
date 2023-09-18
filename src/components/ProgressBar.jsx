import React, { useEffect } from "react";

export const ProgressBar = (props) => {

  const [initialScore, setInitialScore] = React.useState(0);
    useEffect(() => {
    let speed = 5;
      let progress = setInterval(() => {
        setInitialScore((prev)=>{
          const newVal = prev+1
          if(newVal>= props.score){
            clearInterval(progress)
            return newVal
          }
          return newVal
        })
      }, speed);
      return ()=>{clearInterval(progress)
      setInitialScore(0)}
      
  }, [props.score]);

  const styles = {
    background: `conic-gradient(
        #141414 ${initialScore * 3.6}deg,
        #fff ${initialScore * 3.6}deg
    )`,
  };

  return (
    <div>
      <div style={styles} className="circular-progress">
        <div className="  value-container">{props.score}%</div>
      </div>
    </div>
  );
};
