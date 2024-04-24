import React from "react";
import user from "../data/user";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <h3>Links</h3>
     <a href="">{props.links}</a>
     
    </div>
  );
}

export default About;
