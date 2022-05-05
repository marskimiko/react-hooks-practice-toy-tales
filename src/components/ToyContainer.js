import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {

  const renderToyArray = toys.map((toy) => {
    return <ToyCard
      key={toy.id}
      toy={toy} 
    />
  })
  
  return (
    <div id="toy-collection">{renderToyArray}</div>
  );
}

export default ToyContainer;
