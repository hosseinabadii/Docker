import React, { useState } from "react";

const AddFruitForm = ({ addFruit }) => {
  const [fruitName, setFruitName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fruitName) {
      addFruit(fruitName);
      setFruitName("");
    }
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
          placeholder="Enter fruit name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddFruitForm;
