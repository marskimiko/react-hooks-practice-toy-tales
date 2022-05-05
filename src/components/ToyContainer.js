import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, onUpdateToy }) {

  const renderToyArray = toys.map((toy) => {
    return <ToyCard
      key={toy.id}
      toy={toy}
      handleDelete={handleDelete}
      onUpdateToy={onUpdateToy} 
    />
  })
  
  return (
    <div id="toy-collection">{renderToyArray}</div>
  );
}

export default ToyContainer;
