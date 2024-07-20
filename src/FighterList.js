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
  }, []);

  const handleSelectFighter = (fighter) => {
    setSelectedFighter(fighter);
    onSelectFighter(fighter);
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
      <ul>
        {fighters.map((fighter) => (
          <li
            key={fighter.id}
            onClick={() => handleSelectFighter(fighter)}
            className={selectedFighter === fighter ? "selected" : "unselected"}
          >
            {fighter.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FighterList;
