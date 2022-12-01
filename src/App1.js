import React from 'react'
import './App.css'
import MainDash from './components/Sidebar/MainDash/MainDash';
import RightSide from './components/Sidebar/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';

const App1 = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        {/* <RightSide/> */}
      </div>
    </div>
  )
}

export default App1