import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetbox__input">
          <Avatar />
          <input type="text" placeholder="What's happening?" />
        </div>
        <Button variant="outlined" classname="tweetBox__tweetButton" fullWidth>
          Tweet
        </Button>
      </form>
    </div>
  );
}
