import React from 'react';
import image from '../images/image.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="title">Welcome to BToDo</div>
      <div className="content">
        <div className="text">
          <p>Welcome to ToDoApp</p>
        </div>
        <div className="image-container">
          <img src={image} alt="Boards Display" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
