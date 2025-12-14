import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/admin" element={user && user.role === 'admin' ? <AdminPanel /> : <Navigate to="/" />} />
    </Routes>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | <Link to="/admin">Admin</Link>
      </nav>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;
