import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CheckSession } from './services/auth';
import Home from './pages/Home';
import Nav from './components/Nav';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Profile from './pages/Profile';
import Board from './pages/Board';

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState([{
    id: NaN,
    name: '',
    email: ''
  }])

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    setAuthenticated(true);
  };

  const handleLogOut = async () =>{
    setUser(null)
    localStorage.clear();
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <Router>
      <Nav authenticated = { authenticated } user = { user } setUser = {setUser} handleLogOut = { handleLogOut } />
      <main>
        <Routes>
          <Route path = "/" exact element = { <Home/> } />
          <Route path = "/register" exact element = { <RegisterForm user={user} setUser={setUser} setAuthenticated={setAuthenticated}/> } />
          <Route path = "/login"  exact element = { <LoginForm  user={user} setUser={setUser} setAuthenticated={setAuthenticated}/> } />
          <Route path = "/profile" exact element = { <Profile user={user} authenticated={authenticated} /> } />
          <Route path = "/boardPage" exact element = { <Board user={user} authenticated={authenticated} /> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
