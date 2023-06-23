import React, { useState } from "react";

function InputForm({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={gameStatus !== "running"}
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title={"5 letter word"}
      />
    </form>
  );
}

export default InputForm;
