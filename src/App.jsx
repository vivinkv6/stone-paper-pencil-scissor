import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Popup from "./components/Popup";

const Data = React.createContext();

function App() {
  const [user, setUser] = useState("");
  const [ai, setAi] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [userIndex, setUserIndex] = useState("");
  const [aiIndex, setAiIndex] = useState("");
  const [hide,setHide]=useState(false);

  const list = [
    "https://visualpharm.com/assets/940/Hand%20Rock-595b40b85ba036ed117dc17d.svg",
    "https://visualpharm.com/assets/893/Hand-595b40b75ba036ed117d4dae.svg",
    "https://visualpharm.com/assets/550/One%20Finger-595b40b65ba036ed117d493d.svg",
    "https://visualpharm.com/assets/379/Hand%20Peace-595b40b85ba036ed117dc17b.svg",
  ];
  const list2 = ["stone", "paper", "pencil", "scissor"];
  const randomSelect = Math.floor(Math.random(list) * 4);
  console.log(list[randomSelect]);

  const data = {
    user: user,
    setUser: setUser,
    ai: ai,
    setAi: setAi,
    list: list,
    randomSelect: randomSelect,
    userScore: userScore,
    setUserScore: setUserScore,
    aiScore: aiScore,
    setAiScore: setAiScore,
    aiIndex: aiIndex,
    setAiIndex: setAiIndex,
    userIndex: userIndex,
    setUserIndex: setUserIndex,
    list2: list2,
    hide:hide,
    setHide:setHide
  };

  console.log(`userIndex: ${userIndex}`);
  console.log(`AiIndex: ${aiIndex}`);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Data.Provider value={data}>
            <h1 className="fw-bold mb-3">Stone Paper Pencil Scissor Game</h1>
            <div className="col-12">
              <Board />
            </div>
            {userScore == 10 || aiScore == 10 ? (
              <div className="col-12">
                <Popup />
              </div>
            ) : (
              <></>
            )}
          </Data.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
export { Data };
