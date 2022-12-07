// import React, { Component } from "react";
// import "./Signup.css"
// import logo from "../logo.png"
// import { Link, Navigate } from "react-router-dom"



// class AccountLogin extends Component {

//   constructor() {
//     super()
//     this.state = {

//       Email: "",
//       PassWord: "",
//       error: "",
//       redirectToReferer: false
//     }
//   }

//   handelChange = name => event => {
//     this.setState({ [name]: event.target.value })
//   }

//   authenticate(jwt, next) {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("jwt", JSON.stringify(jwt))
//       next();

//     }

//   }

//   clickSubmit = event => {
//     event.preventDefault()
//     const { Email, PassWord } = this.state
//     const user = {
//       Email, PassWord
//     };
//     console.log(user)

//     this.signin(user)
//       .then(data => {
//         if (data.error) {
//           this.setState({ error: data.error })
//         } else {
//           //authenticate
//           this.authenticate(data, () => {
//             this.setState({ redirectToReferer: true })
//           })

//           //redirect

//         }

//       })
//   };

//   signin = (user) => {
//     return fetch("https://api.gyros.farm/api/AdminApi/LoginWithEmail", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify(user)
//     })
//       .then(response => {
//         return response.json()
//       })
//       .catch(err => console.log(err));
//   }


//   render() {
//     const { Email, PassWord, redirectToReferer } = this.state;
//     if (redirectToReferer) {
//       return <Navigate to="/" />

//     }
//     return (
//       <>
//         <div>
//           <div className="Container register">
//             <div className="row">
//               <div className="col-md-3 register-left">
//                 <img src={logo} alt="" />
//                 <h3>Welcome on Gyros</h3>
//                 <p>You are 30 seconds away from earning your own money!</p>
//                 <p>if Your are New Signup Here</p>

//                 <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
//                   <Link to="/signuppage">
//                     Register Here
//                   </Link>
//                 </button>

//                 <br />
//               </div>
//               <div className="col-md-9 register-right ">
//                 <ul className="nav nav-tabs nav-justified " id="myTab" role="tablist" style={{ width: "380px" }} >
//                   <li className="nav-item">
//                     <a
//                       style={{ width: "200px" }}
//                       className="nav-link active"
//                       id="home-tab"
//                       data-toggle="tab"
//                       href="#home"
//                       role="tab"
//                       aria-controls="home"
//                       aria-selected="true"
//                     >
//                       Login with Email
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       style={{ width: "200px" }}
//                       className="nav-link"
//                       id="profile-tab"
//                       data-toggle="tab"
//                       href="#profile"
//                       role="tab"
//                       aria-controls="profile"
//                       aria-selected="false"
//                     >
//                       Login with Mobile
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="tab-content" id="myTabContent">
//                   <div
//                     className="tab-pane  active"
//                     id="home"
//                     role="tabpanel"
//                     aria-labelledby="home-tab"
//                   >
//                     <h3 className="register-heading">Login</h3>
//                     <div className="row register-form">
//                       <div className="col-md-6 ">




//                         <div className="form-group">
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className='flex'>

//                           <div className="form-group">

//                             <input
//                               type="email"
//                               className="form-control"
//                               placeholder="Your Email *"
//                               onChange={this.handelChange('Email')}
//                               value={Email}

//                             />
//                           </div>
//                         </div>

//                         <div className="form-group">
//                           <input
//                             type="password"
//                             minLength={10}
//                             maxLength={10}
//                             name="txtEmpPhone"
//                             className="form-control "
//                             placeholder="Your password "
//                             onChange={this.handelChange('PassWord')}
//                             value={PassWord}

//                           />
//                         </div>



//                         <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }} onClick={this.clickSubmit}>Login</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="tab-pane "
//                     id="profile"
//                     role="tabpanel"
//                     aria-labelledby="profile-tab"
//                   >
//                     <h3 className="register-heading">login Here</h3>
//                     <div className="row register-form">
//                       <div className="col-md-6 ">




//                         <div className="form-group">
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className='flex'>

//                           <div className="form-group">

//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Mobile No"


//                             />
//                           </div>
//                         </div>

//                         <div className="form-group">
//                           <input
//                             type="password"
//                             minLength={10}
//                             maxLength={10}
//                             name="txtEmpPhone"
//                             className="form-control "
//                             placeholder="Your password "

//                           />
//                         </div>



//                         <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }}>Login</button>
//                       </div>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>


//         </div>


//       </>
//     )
//   }
// }
// export default AccountLogin


import React, { useEffect, useState } from "react";
import "./Signup.css"
// import logo from './logo.png';
// import mail from './images/mail.png';
// import lock from './images/lock.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Alert from 'react-s-alert';

export default function Emaillogin(e) {

  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [tokenFlag, setTokenFlag] = useState(false);
  const [token, setToken] = useState("");
  const [id, setID] = useState("");

  // console.log({Email, PassWord})
  const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handlePassWord = (e) => {
    setPassWord(e.target.value)

  }

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/")
    }
  }, [])

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
    console.log("enter in api")
    console.log({ Email, PassWord })
    axios.post("https://api.gyros.farm/api/AdminApi/LoginWithEmail", {
      Email: Email,
      PassWord: PassWord
    }).then(result => {
      console.log("login")
      console.log("assam", result.data.Rgx)
      setID(result.data.Id)
      localStorage.setItem("loginToken", result.data.token)
      localStorage.setItem("ID", result.data.Id)
      localStorage.setItem('Rgx', result.data.Rgx)



      if (token !== undefined || token !== "" || token !== null) {
        console.log("hello world")
        Alert.success("Login successfully !!")
        setTokenFlag(true)
        window.location.replace("/");
      }
      else {
        Alert.error("Email or Password is incorrect")
      }
    })
      .catch(error => {
        console.log("fail")
        Alert.error("Email or Password is incorrect")
      })
  }


  
  return (
    // <div>
    //   <body class="login-page">
    //     <main> 
    //       <div class="login-block">
    //         <Link to="/">
    //           <div class="nav-logo" style={{marginLeft:"9rem"}}>
    //             {/* <img src={logo} width="200" height="200" /> */}
    //           </div>
    //         </Link>
    //         <hr class="hr-xs" />
    //         <div class="form-group">
    //           <div class="input-group">
    //             <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
    //             <span class="input-group-addon"><i class="fa fa-envelope ti-email"></i></span>
    //             <input type="email" value={Email} onChange={handleEmail}
    //             style={{marginLeft:"-3rem"}}
    //               class="form-control form-control-lg" name="email_id" placeholder="Enter Your Email" required />
    //           </div>
    //         </div>

    //         <hr class="hr-xs" />
    //         <div class="form-group">
    //           <div class="input-group">
    //             <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"  style={{marginLeft:"-3.4rem"}}></label>
    //             <span class="input-group-addon"><i class="fa fa-lock ti-unlock"></i></span>

    //             <input type="Password" value={PassWord} onChange={handlePassWord}
               
    //               class="form-control form-control-lg" name="password" placeholder="Enter Your Password" required />
    //           </div>
    //         </div>

 

    //         <div class="loginbutton">
    //           <button onClick={handleApi} class="btn btn-primary btn-block loginfont3">Login</button>
    //         </div>

    //         <div className="lowersection">
    //           <Link to="/forgetpass">
    //             <p class="text-center1 loginfont" style={{marginLeft:"3rem"}}>Forget Password </p>
    //           </Link>

    //           <Link to="/Createaccount">
    //             <a class="txt-brand loginfont" href="user-login.html" style={{marginLeft:"3rem"}}>SignUp</a>
    //           </Link>

    //         </div>
    //       </div>
    //     </main>
    //   </body>
    // </div>
    <>
        <div>
          <div className="Container register">
            <div className="row">
              <div className="col-md-3 register-left">
                {/* <img src={logo} alt="" /> */}
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
                <ul className="nav nav-tabs nav-justified " id="myTab" role="tablist" style={{ width: "380px" }} >
                  <li className="nav-item">
                    <a
                      style={{ width: "200px" }}
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
                      style={{ width: "200px" }}
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



                        <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }} onClick={handleApi}>Login</button>
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
                              placeholder="Mobile No"


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

                          />
                        </div>



                        <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }}>Login</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


      </>
  );
}   