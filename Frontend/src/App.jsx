import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div className='w-screen'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App