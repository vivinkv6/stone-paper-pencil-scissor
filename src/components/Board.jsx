import React from "react";
import Ai from "./Ai";
import Selection from "./Selection";
import You from "./You";

function Board() {
  return (
    <div className="container">
      <div className="row border border-5 border-dark py-5">
        <div className="col-6">
          <You />
        </div>
        <div className="col-6">
          <Ai />
        </div>
        <div className="col-12">
          <Selection />
        </div>
      </div>
    </div>
  );
}

export default Board;
