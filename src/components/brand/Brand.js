import React from "react";
import "./brand.css";
import { google, slack, shopify, dropbox, atlassian } from "./imports";
const Brand = () => {
  return (
    <div className="gpt3--brand section--padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassin" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
