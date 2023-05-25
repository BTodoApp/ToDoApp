import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CheckSession } from './services/auth';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState({
    id:NaN,
    email: '',
    name: ''
  })

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    setAuthenticated(true)
  }

  const handleLogOut = () =>{
    setUser(null)
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  },[])

  return (
    <Router>
      <Nav authenticated = { authenticated } user = { user } handleLogOut = { handleLogOut } />
      <main>
        <Routes>
          <Route path = "/" exact element = { <Home/> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
