import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/User';
import "../styles/Home.css"

function Home() {

    const user = useContext(UserContext);
  return (
    <>
      <div className="home_container center_flex_col">
        <div className="links">
          <span className="link_container">
          <Link to="/contact">Contact</Link>
          </span>
          <span className="link_container">
          <Link to="/">Home</Link>
          </span>
      </div>
        <h3 className="intro">
          Welcome to DiagnoKare!
        </h3>
    </div>
    </>
  )
}

export default Home