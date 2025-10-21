import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import OrderPage from './pages/OrderPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} /> 
        </Routes>
   
   
    </BrowserRouter>

  )
}

export default App
