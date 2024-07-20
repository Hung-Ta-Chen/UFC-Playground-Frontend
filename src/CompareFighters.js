import React from "react";

function CompareFighters({ fighter1, onSelectFighter2, fighter2, fighters }) {
  return (
    <div>
      <h2>Compare Fighters</h2>
      {fighter1 && fighter2 && (
        <div>
          <p>
            <b>
              {fighter1.name} vs {fighter2.name}
            </b>
          </p>
          <p>
            Age: {fighter1.age} vs {fighter2.age}
          </p>
          <p>
            Height: {fighter1.height} vs {fighter2.height}
          </p>
          <p>
            Reach: {fighter1.reach} vs {fighter2.reach}
          </p>
          <p>
            Weight Class: {fighter1.division} vs {fighter2.division}
          </p>
          <p>
            Style: {fighter1.style} vs {fighter2.style}
          </p>
          <p>
            Wins: {fighter1.wins} vs {fighter2.wins}
          </p>
          <p>
            Losses: {fighter1.losses} vs {fighter2.losses}
          </p>
          <p>
            Draws: {fighter1.draws || 0} vs {fighter2.draws || 0}
          </p>
          <p>
            Knockout Wins: {fighter1.wins_by_knockout} vs{" "}
            {fighter2.wins_by_knockout}
          </p>
          <p>
            Submission Wins: {fighter1.wins_by_submission} vs{" "}
            {fighter2.wins_by_submission}
          </p>
          <p>
            Decision Wins: {fighter1.wins_by_decision} vs{" "}
            {fighter2.wins_by_decision}
          </p>
          <p>
            Losses by Knockout: {fighter1.losses_by_knockout} vs{" "}
            {fighter2.losses_by_knockout}
          </p>
          <p>
            Losses by Submission: {fighter1.losses_by_submission} vs{" "}
            {fighter2.losses_by_submission}
          </p>
          <p>
            Losses by Decision: {fighter1.losses_by_decision} vs{" "}
            {fighter2.losses_by_decision}
          </p>
        </div>
      )}
      <div>
        <ul>
          {fighters.map((fighter) => (
            <li
              key={fighter.id}
              onClick={() => onSelectFighter2(fighter)}
              className={fighter2 === fighter ? "selected" : "unselected"}
            >
              {fighter.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompareFighters;
