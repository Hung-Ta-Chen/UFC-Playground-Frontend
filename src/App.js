import "./App.css";
import React, { useState } from "react";
import FighterList from "./FighterList";
import FighterDetails from "./FighterDetails";
import CompareFighters from "./CompareFighters";
import MatchPrediction from "./MatchPrediction";

function App() {
  const [selectedFighter, setSelectedFighter] = useState(null);
  const [fighterToCompare, setFighterToCompare] = useState(null);
  const [fighters, setFighters] = useState([]);

  const handleSelectFighter = (fighter) => {
    setSelectedFighter(fighter);
  };

  const handleSelectFighterToCompare = (fighter) => {
    setFighterToCompare(fighter);
  };

  const handleSetFighters = (fighters) => {
    setFighters(fighters);
  };

  return (
    <div className="App">
      <h1>UFC Playground</h1>
      <div className="container">
        <div className="component">
          <FighterList
            onSelectFighter={handleSelectFighter}
            onSetFighters={handleSetFighters}
          />
        </div>
        <div className="component">
          <FighterDetails fighter={selectedFighter} />
        </div>
        <div className="component">
          <CompareFighters
            fighter1={selectedFighter}
            onSelectFighter2={handleSelectFighterToCompare}
            fighter2={fighterToCompare}
            fighters={fighters}
          />
        </div>
        <div className="component">
          <MatchPrediction
            fighter1={selectedFighter}
            fighter2={fighterToCompare}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
