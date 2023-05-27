import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CheckSession } from './services/auth';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    id: NaN,
    email: '',
    name: ''
  });

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    setAuthenticated(true);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <Router>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
        <Nav authenticated={authenticated} user={user} handleLogOut={handleLogOut} />
      </div>
      <main style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
