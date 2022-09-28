import React from 'react'
import LoginScreen from './LoginScreen'
import Timer from './Timer'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path = '/' element = {<LoginScreen/>}/>
        <Route path = '/timer' element = {<Timer/>}/>
      </Routes>
     
    </div>
  )
}

export default App