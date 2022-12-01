import './App.css'
import Login from './components/Login/Login';

// import MainDash from './components/Sidebar/MainDash/MainDash';
// import RightSide from './components/Sidebar/RightSide/RightSide';
// import Sidebar from './components/Sidebar/Sidebar';
import Signup from './components/Signup/Signup';
import { Route, Routes, Navigate } from "react-router-dom";
import App1 from './App1';
import Updates from './components/Sidebar/Updates/Updates';
import Data from './components/analytics/Data';




function App() {
  // const user = localStorage.getItem("token");

  return (
    <Routes>
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			<Route path="/Signup" exact element={<Signup />} />
			<Route path="/Login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/Login" />} />
      <Route path="/main" element={<App1/>}/>
      <Route path="/updates" element={<Updates />} />
      <Route path="/news" element={ <Data /> } />
		</Routes>

    
  );
}



export default App;
