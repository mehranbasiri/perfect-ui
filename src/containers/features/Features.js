import React from "react";
import { Feature } from "../../components";
import "./features.css";
const featuresData = [
  {
    title: "improving end distruts instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quod! Quod sunt laudantium reiciendis similique corrupti dolorem. Impedit, adipisci, voluptates tenetur facilis a reprehenderit corporis soluta quaerat expedita officia debitis!",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quod! Quod sunt laudantium reiciendis similique corrupti dolorem. Impedit, adipisci, voluptates tenetur facilis a reprehenderit corporis soluta quaerat expedita officia debitis!",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quod! Quod sunt laudantium reiciendis similique corrupti dolorem. Impedit, adipisci, voluptates tenetur facilis a reprehenderit corporis soluta quaerat expedita officia debitis!",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quod! Quod sunt laudantium reiciendis similique corrupti dolorem. Impedit, adipisci, voluptates tenetur facilis a reprehenderit corporis soluta quaerat expedita officia debitis!",
  },
];

const Features = () => {
  return (
    <div className="gpt3--features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It.Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
