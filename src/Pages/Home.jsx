import React from "react";
import Layout from '../Components/Layout'
import { Link } from "react-router-dom";
import res from "../Utils/res.jpeg";
import  HomeStyle from "../Style/HomeStyle.css";
// import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${res})` }}>
        <div className="headerContainer">
          <h1>Taksh Cuisine</h1>
          <p>The Taste of India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;