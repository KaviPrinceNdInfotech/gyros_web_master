import React, { useEffect, useState } from "react";
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import {Link} from "react-router-dom"
import Alert from 'react-s-alert';

function AccountLogin(e) {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [tokenFlag, setTokenFlag] = useState(false);
  const [token, setToken] = useState("");
  const [id, setID] = useState("");
  const [toggle,setToggle]=useState(false);
  const [Otp,setOtp]=useState()
  const [mobileNumber , setMobileNumber]= useState()
   const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handlePassWord = (e) => {
    setPassWord(e.target.value)

  }

  async function login() {
    console.warn(Email, PassWord)
    const token = localStorage.getItem('token')
    const item = { Email, PassWord }
    const result = await fetch('https://api.gyros.farm/api/AdminApi/LoginWithEmail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        //  'Authorization': `Bearer ${token}`,
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.log('result', result)

    localStorage.setItem('user-info', JSON.stringify(result))
    navigate("/")

  }

  const handleApi = () => {
    if(Email && PassWord){
      axios.post("https://api.gyros.farm/api/AdminApi/LoginWithEmail",{Email,PassWord}).then(result=>{
        console.log(result,"???????????????????")
        setID(result.data.Id)
        localStorage.setItem("loginToken", result.data.token)
        localStorage.setItem("ID", result.data.Id)
        localStorage.setItem('Rgx', result.data.Rgx)
      }).catch((err)=>{
        console.log(err)
        alert(err.response.data.Message)
      })
    }
    // axios.post("https://api.gyros.farm/api/AdminApi/LoginWithEmail", {
    //   Email: Email,
    //   PassWord: PassWord
    // }).then(result => {
    //   console.log("login")
    //   console.log("assam", result.data.Rgx)
    //   setID(result.data.Id)
    //   localStorage.setItem("loginToken", result.data.token)
    //   localStorage.setItem("ID", result.data.Id)
    //   localStorage.setItem('Rgx', result.data.Rgx)



    //   if (token !== undefined || token !== "" || token !== null) {
    //     console.log("hello world")
    //     Alert.success("Login successfully !!")
    //     setTokenFlag(true)
    //     window.location.replace("/");
    //   }
    //   else {
    //     Alert.error("Email or Password is incorrect")
    //   }
    // })
    //   .catch(error => {
    //     console.log("fail")
    //     Alert.error("Email or Password is incorrect")
    //   })
  }

  const handleOtp=()=>{
    setToggle(true);

    axios.post("https://api.gyros.farm/api/AdminApi/LoginMobileOrEmail",{MobileOrEmail:mobileNumber}).then(result=>{
      console.log(result,"???????????????????")
      alert(result.data.message)
    })

  }
  const handleMobileLogin=()=>{
    if ( Otp){
      axios.post("https://api.gyros.farm/api/AdminApi/MobileOrEmailOtpVerify",{Otp:Otp}).then(result=>{
        console.log(result,"???????????????????")
        setID(result.data.Id)
        localStorage.setItem("loginToken", result.data.token)
        localStorage.setItem("ID", result.data.Id)
        localStorage.setItem('Rgx', result.data.Rgx)
      
        
      })

    }
   

  

  }


  const token1=localStorage.getItem('loginToken')
  useEffect(()=>{
    if(token1){
      navigate("/")
    }else{
      navigate('/accountlogin')
    }
  },[token1])
  return (
    <>
      <div>
           <div className="Container register">
  <div className="row">
    <div className="col-md-3 register-left">
      <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
      <h3>Welcome on Gyros</h3>
      <p>You are 30 seconds away from earning your own money!</p>
      <p>if Your are New Signup Here</p>
      
      <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
      <Link to="/signuppage">
        Register Here
        </Link>
        </button>
     
      <br />
    </div>
    <div className="col-md-9 register-right ">
      <ul className="nav nav-tabs nav-justified " id="myTab" role="tablist" style={{width:"380px"}} >
        <li className="nav-item">
          <a
          style={{width:"200px"}}
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Login with Email
          </a>
        </li>
        <li className="nav-item">
          <a
          style={{width:"200px"}}
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Login with Mobile
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane  active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h3 className="register-heading">Login</h3>
          <div className="row register-form">
            <div className="col-md-6 ">
              
              
             
             
              <div className="form-group">
              </div>
            </div>
            <div className="col-md-6">
                <div className='flex'>
           
              <div className="form-group">
                
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email *"
                  value={Email} onChange={handleEmail}
                  
                />
              </div>
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  minLength={10}
                  maxLength={10}
                  name="txtEmpPhone"
                  className="form-control "
                  placeholder="Your password "
                  value={PassWord} onChange={handlePassWord}
                
                />
              </div>
              
              
              
             <button className=' bg-green-700 w-40 p-2 rounded-full' style={{marginLeft:"123px"}} onClick={handleApi}>Login</button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane "
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h3 className="register-heading">login Here</h3>
          <div className="row register-form">
          <div className="col-md-6 ">
              
              
             
             
              <div className="form-group">
              </div>
            </div>
            <div className="col-md-6">
                <div className='flex'>
           
              <div className="form-group">
                
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile No or Email...."
                  value={mobileNumber}
                  onChange={(e)=>setMobileNumber(e.target.value)}
                />
              </div>
              </div>
              {toggle && <div className="form-group">
                <input
                  type="text"
                  minLength={10}
                  maxLength={10}
                  name="txtEmpPhone"
                  className="form-control "
                  placeholder="Enter otp "
                  value={Otp}
                  onChange={(e)=>setOtp(e.target.value)}
                />
              </div> }
             
              
              
              {toggle ?<button className=' bg-green-700 w-40 p-2 rounded-full' style={{marginLeft:"123px"}} onClick={handleMobileLogin} >Login</button>:<button className=' bg-green-700 w-40 p-2 rounded-full' style={{marginLeft:"123px"}} onClick={handleOtp} >Send OTP</button> }
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
       
    </>
  )
}

export default AccountLogin

