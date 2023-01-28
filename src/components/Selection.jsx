import React, { useContext } from "react";
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

  return (
    <div className="py-5">
      <button className="btn btn-primary me-2">
        <img
          src={
            "https://visualpharm.com/assets/940/Hand%20Rock-595b40b85ba036ed117dc17d.svg"
          }
          onClick={() => {
            setUser(
              "https://visualpharm.com/assets/940/Hand%20Rock-595b40b85ba036ed117dc17d.svg"
            );
            setAi(list[randomSelect]);
            setUserIndex(list2[0]);
            setAiIndex(list2[randomSelect]);
          }}
          height={30}
          width={50}
          alt="Stone"
        />
      </button>
      <button className="btn btn-primary  me-2">
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
      <button className="btn btn-primary  me-2">
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
      <button className="btn btn-primary  me-2">
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
