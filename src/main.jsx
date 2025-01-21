import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Routes, Route } from "react-router";
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route index element={<LoginPage />} />
  <Route path="login" element={<LoginPage />} />
  <Route path="dashboard" element={<Dashboard />} />
  </Routes>
</BrowserRouter>,
)
