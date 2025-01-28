import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/Landing'
import { Provider } from 'react-redux'
import { store } from './store/store'


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App