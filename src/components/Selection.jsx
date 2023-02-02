import React, { useContext, useEffect } from "react";
import { Data } from "../App";

function Selection() {
  const {
    user,
    setUser,
    ai,
    setAi,
    list,
    randomSelect,
    userIndex,
    setUserIndex,
    aiIndex,
    setAiIndex,
    list2,
    aiScore,
    setAiScore,
    userScore,
    setUserScore,
  } = useContext(Data);

  useEffect(() => {
    if (userIndex == "stone" && aiIndex == "stone") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "stone" && aiIndex == "paper") {
      setUserScore((userScore) => userScore);
      setAiScore(aiScore + 1);
    } else if (userIndex == "stone" && aiIndex == "pencil") {
      setUserScore((userScore) => userScore + 1);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "stone" && aiIndex == "scissor") {
      setUserScore((userScore) => userScore + 1);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "paper" && aiIndex == "stone") {
      setUserScore((userScore) => userScore + 1);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "paper" && aiIndex == "paper") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "paper" && aiIndex == "pencil") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore + 1);
    } else if (userIndex == "paper" && aiIndex == "scissor") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore + 1);
    } else if (userIndex == "pencil" && aiIndex == "stone") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore + 1);
    } else if (userIndex == "pencil" && aiIndex == "paper") {
      setUserScore((userScore) => userScore + 1);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "pencil" && aiIndex == "pencil") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "pencil" && aiIndex == "scissor") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore + 1);
    } else if (userIndex == "scissor" && aiIndex == "stone") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore + 1);
    } else if (userIndex == "scissor" && aiIndex == "paper") {
      setUserScore((userScore) => userScore + 1);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "scissor" && aiIndex == "pencil") {
      setUserScore((userScore) => userScore + 1);
      setAiScore((aiScore) => aiScore);
    } else if (userIndex == "scissor" && aiIndex == "scissor") {
      setUserScore((userScore) => userScore);
      setAiScore((aiScore) => aiScore);
    }
  }, [userIndex, aiIndex]);

  return (
    <div className="py-5">
      <button className="btn btn-primary me-2 mt-2">
        <img
          src={
            "https://visualpharm.com/assets/940/Hand%20Rock-595b40b85ba036ed117dc17d.svg"
          }
          onClick={() => {
            setUser(
              "https://visualpharm.com/assets/940/Hand%20Rock-595b40b85ba036ed117dc17d.svg"
            );
            console.log(`UserIndex2: ${userIndex}`);
            console.log(`AiIndex2: ${aiIndex}`);
            setAi(list[randomSelect]);
            setUserIndex(list2[0]);
            setAiIndex(list2[randomSelect]);
          }}
          height={30}
          width={50}
          alt="Stone"
        />
      </button>
      <button className="btn btn-primary  me-2 mt-2">
        <img
          src={
            "https://visualpharm.com/assets/893/Hand-595b40b75ba036ed117d4dae.svg"
          }
          onClick={() => {
            setUser(
              "https://visualpharm.com/assets/893/Hand-595b40b75ba036ed117d4dae.svg"
            );
            setAi(list[randomSelect]);
            setUserIndex(list2[1]);
            setAiIndex(list2[randomSelect]);
          }}
          height={30}
          width={50}
          alt="Paper"
        />
      </button>
      <button className="btn btn-primary  me-2 mt-2">
        <img
          src={
            "https://visualpharm.com/assets/550/One%20Finger-595b40b65ba036ed117d493d.svg"
          }
          onClick={() => {
            setUser(
              "https://visualpharm.com/assets/550/One%20Finger-595b40b65ba036ed117d493d.svg"
            );
            setAi(list[randomSelect]);
            setUserIndex(list2[2]);
            setAiIndex(list2[randomSelect]);
          }}
          height={30}
          width={50}
          alt="Pencil"
        />
      </button>
      <button className="btn btn-primary  me-2 mt-2">
        <img
          src={
            "https://visualpharm.com/assets/379/Hand%20Peace-595b40b85ba036ed117dc17b.svg"
          }
          onClick={() => {
            setUser(
              "https://visualpharm.com/assets/379/Hand%20Peace-595b40b85ba036ed117dc17b.svg"
            );
            setAi(list[randomSelect]);
            setUserIndex(list2[3]);
            setAiIndex(list2[randomSelect]);
          }}
          height={30}
          width={50}
          alt="Scissor"
        />
      </button>
    </div>
  );
}

export default Selection;
