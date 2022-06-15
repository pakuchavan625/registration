import React, { useState} from "react";
import "../styles/loginwrapper.css";
import {Link,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = (props) => {
    const navigate = useNavigate();
    const [loginState,setLoginState]=useState({
        email:"",
        password:""
    })
    const [ emailValid, setEmailValid ] = useState(false);



    const login = (e)=>{
        e.preventDefault();
        axios({
          method:"post",
          url:"http://localhost:5512/login",
          data:{
            email:loginState.email,
            password:loginState.password
          }
        }).then((res)=>{
          console.log(res.data)
          if(res.data.user.length !=0){
         
          localStorage.setItem("login",true);
          navigate('/home', { state: { name:res.data.user[0].firstName }})
          toast("user logged in successfully")
        
          }else{
            toast("not a valid user")
          }
         
        }).catch((err)=>{
          toast("user authentication failed")
        })
       
    }

    const handleInputChange=(e)=>{
        let value;
        value= e.target.value;
        setLoginState({
            ...loginState,
            [e.target.name]:value
        })
        if(e.target.name === "email"){
            checkEmailValue(value)
        }
    }
   
    const checkEmailValue = value => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(value)) {
          setEmailValid(false);
        } else {
          setEmailValid(true);
        }
      };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <form className="mb-5">
          <div className="bottom-space">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control field-control"
              name="email"
              id="email"
              value={loginState.email}
              placeholder="your@email.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="bottom-space">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control field-control"
              name="password"
              id="password"
              value={loginState.password}
              placeholder="Your Password"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" class="btn  btn-primary login-button" disabled={!emailValid || !loginState.password} onClick={login}>
               Sign In
          </button>
          <ToastContainer />
          <div className="button-group">
                <h5>
                  <Link to="/forget-password">Forgot Password</Link>
                </h5>
                <h5>
                  <Link to="/signup">Sign Up</Link>
                </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
