import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3--whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3--whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse eius eum dignissimos delectus iure facere tenetur quisquam possimus deleniti quod ipsam consequatur iusto, quo et, nulla libero? Dignissimos, esse!"
        />
      </div>
      <div className="gpt3--whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3--whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur Tempora esse eius eum dignissimos delectus iure facere tenetur quisquam possimus deleniti quod ipsam consequa, esse!"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse eius eum dignissimos delectus iure facere tenetur quisquam possimus deleniti quod ipsam consequatur iusto, quo et, nulla libero? Dignissimos, esse!"
        />{" "}
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse eius eum dignissimos delectus iure facere tenetur quisquam possimus deleniti quod ipsam consequatur iusto, quo et, nulla libero? Dignissimos, esse!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
