import React from "react";

export const DeprecatedTags = (props) => {
  let deprectedtagElements = props.tags.map((tag)=><p key={tag}  >{tag}</p>)
  return (
    <div className="deprecatedtags-container">
      <h1>Deprected tags</h1>
      <div className="deprecated-tags">
      {deprectedtagElements}
      </div>
    </div>
  );
};
