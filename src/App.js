
import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ForgotPasswod from './Components/ForgotPasswod';

function App() {
  const login=localStorage.getItem("login")
  return (
    <>
  <Navbar/>
   <Router>
     <Routes>

       <Route  path="/home" element={<Home/>}  />
       <Route  path="/"  element={login === true ? <Navigate to="/home"/> : <Login />}/>
       <Route  path="/signup" element={<SignUp/>}/>
       <Route  path="/forget-password" element={<ForgotPasswod/>}/>
     </Routes>
   </Router>
   <Footer/>
   </>
  );
}

export default App;
