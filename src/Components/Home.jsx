import React from 'react'
import "../styles/home.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = ({props}) => {

  const navigate=useNavigate()
const {state} = useLocation();
const { name } = state; // Read values passed on state


const handleLogout=()=>{
  localStorage.removeItem("login")
  navigate("/")
  toast("user logged out successfully")

}
  return (
    <div className='home-wrapper'>
   
        <h1>Welcome to the Dwata Tech solutions</h1>
        <span className='user-name' ><b>Mr.</b> {name}</span>
        <button className='btn btn-success ' style={{marginTop:"15px"}} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home