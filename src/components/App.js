import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  const handleDelete= (id) => {
    let updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
    const config = {
      method: "DELETE",
    }
    fetch(`http://localhost:3001/toys/${id}`, config)
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then((allToys) => setToys(allToys))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        handleDelete={handleDelete}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
