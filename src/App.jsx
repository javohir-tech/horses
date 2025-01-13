import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// bootsrapni css
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import MainNavbar from './Components/MainNavbar';
import Banner from './Components/Banner';

function App() {

  return (
    <>
      <div className='banner'>
        {/* banner section */}
        <MainNavbar />
        {/* banner section */}
        <Banner />
      </div>
    </>
  )
}

export default App
