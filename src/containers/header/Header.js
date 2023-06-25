import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3--header" id="home">
      <div className="gpt3--header-content">
        <h1 className="gradient__text">
          Let's Build Somthing amazing with GPT3 OpenAI
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          dignissimos odit et quasi nobis temporibus unde eligendi aut doloribus
          ut tempora quae reprehenderit eaque provident voluptate beatae
          molestiae, consequuntur nostrum!
        </p>
        <div className="gpt3--header-content-input">
          <input type="email" placeholder="Email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3--header-content--people">
          <img src={people} />
          <p>1.600 people requested access a visit in last hours</p>
        </div>
      </div>
      <div className="gpt3--header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
