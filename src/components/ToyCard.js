import React from "react";

function ToyCard({ toy, handleDelete, onUpdateToy }) {
  const {  id, name, image, likes } = toy;

  function onHandleClickDelete() {
    handleDelete(toy.id)
  }

  function handleLikeClick() {
    const updateObj = {
      likes: likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj)
    })
      .then((r) => r.json())  
      .then(onUpdateToy); 
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={onHandleClickDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
