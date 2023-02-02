import React, { useContext } from "react";
import { Data } from "../App";

function You() {
  const { user, setUser, userScore } = useContext(Data);
  return (
    <div className="border border-3 border-primary">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <h2 className="fw-bold mb-3">You</h2>
          </div>
          <div className="col-6">
            <span className="fw-bold" style={{fontSize:'40px'}}>
              {userScore}
            </span>
          </div>
          <div className="col-6">
            {user.length > 0 ? (
              <span className="py-2">
                <img src={user} height={50} width={50} alt="Rock" />
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default You;
