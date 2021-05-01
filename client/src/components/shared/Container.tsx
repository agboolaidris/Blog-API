import React from "react";

function Container({ height, backgroundColor, style, children }) {
  const styles = {
    height,
    backgroundColor,
  };

  return (
    <div className={`container mx-auto ${style}`} style={styles}>
      {children}
    </div>
  );
}

export default Container;
