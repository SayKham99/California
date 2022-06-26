import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Main/Main'
import Products from './Pages/Products/Products'
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/products'} element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App