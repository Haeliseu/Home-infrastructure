import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <React.StrictMode>
        <Routes>
            <Route path="/" element={<RequireAuth />} />
            <Route path="/login" element={<Login className="login-container" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </React.StrictMode>
      <Footer className="footer"/>
    </Router>
  );
};

export default App;
