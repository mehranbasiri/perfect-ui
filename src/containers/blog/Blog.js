import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="blog section__padding">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happeninng We are blogging about it
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article
            imgUrl={blog01}
            date="june 25, 2023"
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog-container-groupB">
          <Article
            imgUrl={blog02}
            date="june 25, 2023"
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="june 25, 2023"
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="june 25, 2023"
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="june 25, 2023"
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
