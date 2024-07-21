import React, { useState, useEffect } from "react";

function FighterList({ onSelectFighter, onSetFighters }) {
  const [fighters, setFighters] = useState([]);
  const [selectedFighter, setSelectedFighter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Loading the fighters
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/fighters/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail in fetching fighters data");
        }
        return response.json();
      })
      .then((data) => {
        setFighters(data);
        onSetFighters(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  });

  const handleSelectFighter = (event) => {
    const selectedFighter = fighters.find(
      (fighter) => fighter.id === parseInt(event.target.value, 10)
    );
    setSelectedFighter(selectedFighter);
    onSelectFighter(selectedFighter);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <h2>Fighter List</h2>
      <pre>{"\n"}</pre>
      <select
        onChange={handleSelectFighter}
        value={selectedFighter ? selectedFighter.id : ""}
        className="dropdown"
      >
        <option value="" disabled>
          Select a fighter
        </option>
        {fighters.map((fighter) => (
          <option key={fighter.id} value={fighter.id}>
            {fighter.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FighterList;
