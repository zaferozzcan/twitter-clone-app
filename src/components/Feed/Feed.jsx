import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Home</h1>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Posts */}
      {posts.map((post) => {
        return (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.username}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        );
      })}
    </div>
  );
}
