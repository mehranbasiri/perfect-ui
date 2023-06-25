import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="possibility section__padding" id="#possibility">
      <div className="possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient__text">
          The possibility are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, animi
          nemo beatae nihil id eius quos, delectus fuga, mollitia quam voluptas
          nostrum amet ex sit soluta. Provident, dignissimos? Ullam, commodi!
        </p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
