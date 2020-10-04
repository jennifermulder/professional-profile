import React from 'react';
import coverImage from "../../assets/images/0.jpg";

function About(props) {
  console.log("props", props.children);
  console.log(coverImage)
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <p>This is the text from my brand statement</p>
    </section>
  );
}

export default About;