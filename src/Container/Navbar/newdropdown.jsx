import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Newdropdown = () => {
  const [visual, setVisual] = useState(false);

  const see = () => {
    setVisual(!visual);
  };
  return (
    <>
      <div className="main-container">
        <Link onClick={see} to="#">
          Others{" "}
        </Link>
        {visual ? (
          <div className="list-items" >
            <Link to="#">Search Land</Link>
            <Link to="#">Owned LAnd</Link>
            <Link to="#">Search Land Sale</Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Newdropdown;
