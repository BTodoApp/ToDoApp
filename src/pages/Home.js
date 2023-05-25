import React from 'react';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="container">
      <div className="title">Welcome to ToDoApp</div>
      <div className="content">
        <div className="image-container">
          <img src="../images/image.png" alt="Picture of application" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
