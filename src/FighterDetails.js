import React from "react";

function FighterDetails({ fighter }) {
  if (!fighter) {
    return (
      <div>
        <h2>Fighter Details</h2>
        <p>Select a fighter first</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Fighter Details</h2>
      <p>Name: {fighter.name}</p>
      <p>Intro: {fighter.intro}</p>
      <p>Age: {fighter.age}</p>
      <p>Height: {fighter.height}</p>
      <p>Reach: {fighter.reach}</p>
      <p>Weight Class: {fighter.division}</p>
      <p>Style: {fighter.style}</p>
      <p>Wins: {fighter.wins}</p>
      <p>Wins by Knockout: {fighter.wins_by_knockout}</p>
      <p>Wins by Submission: {fighter.wins_by_submission}</p>
      <p>Wins by Decision: {fighter.wins_by_decision}</p>
      <p>Losses: {fighter.losses}</p>
      <p>Losses by Knockout: {fighter.losses_by_knockout}</p>
      <p>Losses by Submission: {fighter.losses_by_submission}</p>
      <p>Losses by Decision: {fighter.losses_by_decision}</p>
    </div>
  );
}

export default FighterDetails;
