import React, { useContext } from "react";
import { Data } from "../App";
function Popup() {
  const {
    ai,
    setAi,
    list,
    randomSelect,
    aiScore,
    userScore,
    setAiScore,
    setUserScore,
    aiIndex,
    userIndex,
    user,
    setUser,
    setHide
  } = useContext(Data);

  const clearScore = () => {
    setAiScore(0);
    setUserScore(0);
    setAi("");
    setUser("");
    setHide(false)
  };
  return (
    <div className="border border-3 border-primary mt-5 py-5">
      {userScore == 10 && <h1>YOU WON</h1>}
      {aiScore == 10 && <h1>AI WON</h1>}
      <button className="btn btn-primary mt-3" onClick={clearScore}>
        Clear Score
      </button>
    </div>
  );
}

export default Popup;
