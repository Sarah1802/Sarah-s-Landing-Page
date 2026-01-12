// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CatsInSpace from './CatsInSpace.jsx'
import Profile from './Profile.jsx'

function App() {



  return (
    
    <>
      <div className='flex-container'>
        <div className='profile-component'>
          <Profile />
        </div>
        <div className='catsinspace-component'>
          <CatsInSpace/>
        </div>
        
        
      </div>
    </>
  )
}
export default App
