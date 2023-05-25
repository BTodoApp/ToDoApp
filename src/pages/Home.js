import React from 'react';
import image from '../images/image.png';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="container">
      <div className="title">Welcome to ToDoApp</div>
      <div className="content">
        <div className="image-container">
          <img src={image} alt="Picture of application" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
