import Post from "./Post/Post"
import React from "react";
import { posts } from "../data";
import '../index.css'


const GameInfoSection = () => {
  return (

    <div className="">
      <ul>
        {posts.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </ul>
    </div>


  )
};

export default GameInfoSection;