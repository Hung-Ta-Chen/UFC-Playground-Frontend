import React, { useState } from "react";

function MatchPrediction({ fighter1, fighter2 }) {
  const [showPrediction, setShowPrediction] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [reason, setReason] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = () => {
    setShowPrediction(true);
    predictWinner(fighter1.id, fighter2.id);
  };

  if (!fighter1 || !fighter2) {
    return (
      <div>
        <h2>Match Prediction</h2>
        <p>Select two fighters to see match predictions</p>
      </div>
    );
  }

  const predictWinner = (fighter1Id, fighter2Id) => {
    setLoading(true);
    setError(null);

    fetch(`${process.env.REACT_APP_API_URL}/predict/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fighter1_id: fighter1Id,
        fighter2_id: fighter2Id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch prediction");
        }
        return response.json();
      })
      .then((data) => {
        setPrediction(data.prediction);
        setReason(data.reason);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Match Prediction</h2>
      <pre>{"\n"}</pre>
      <p>
        <h3>
          {fighter1.name} vs {fighter2.name}
        </h3>
      </p>
      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>
      {error && <p className="error">Error: {error}</p>}
      {showPrediction && prediction && (
        <div>
          <pre>{"\n"}</pre>
          <p>
            <h3>Predicted Winner: {prediction}</h3>
          </p>
          {reason && <p>Reason: {reason}</p>}
        </div>
      )}
    </div>
  );
}

export default MatchPrediction;
