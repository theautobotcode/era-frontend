import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/dashboard'
import LoginPage from './pages/login'
import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  returnReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
