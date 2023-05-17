import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/About.css";
function About() {
  return (
	<div className="center_flex_col about_container">
  		    <div className="links center_flex">
				<span className="link_container">
				<Link to="/about">About</Link>
				</span>
				<span className="link_container">
				<Link to="/">Home</Link>
				</span>
			</div>
    <ul>
      <li>John Doe</li>
      <li>Jane Doe</li>
      <li>Ethan Hunt</li>
      <li>Ellen Ripley</li>
      <li>Michael Scott</li>
      <li>Walter White</li>
      <li>John Doe</li>
    </ul>
  </div>
  )
}

export default About