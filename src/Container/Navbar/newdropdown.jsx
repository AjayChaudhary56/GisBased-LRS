import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Newdropdown = () => {
  const [visual, setVisual] = useState(false);

  // const see = () => {
  //   setVisual(!visual);
  // };
  const dontsee = () => {
    setVisual(!visual);
    
  };

  return (
    <>
      <div className="main-container">
        <Link  onMouseOverCapture={dontsee} to="#">
          Others{" "}
        </Link>
        {visual ? (
          <div className="list-items" >
            <Link to="/ownedLand">Owned Land</Link>
            <Link to="/searchLandSale">Search Land Sale</Link>
            <Link to="/transOwnership">Transfer Ownership</Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Newdropdown;
