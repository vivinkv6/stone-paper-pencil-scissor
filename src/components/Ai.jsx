import React, { useContext } from "react";
import { Data } from "../App";

function Ai() {
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
  } = useContext(Data);

  return (
    <div className="border border-3 border-primary">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <h2 className="fw-bold mb-3">AI</h2>
          </div>
          <div className="col-6">
            {ai.length > 0 ? (
              <span className="py-2">
                <img src={ai} height={50} width={50} alt="Not Found" />
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="col-6">
            <span className="px-2 py-2 fw-bold" style={{fontSize:'40px'}}>
              {aiScore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;
