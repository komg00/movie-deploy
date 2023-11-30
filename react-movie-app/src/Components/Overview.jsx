import React from "react";

function Overview({title, overview}) {
  return (
    <div className="overview">
      <div className="overview-info">
        <p>{title}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Overview;