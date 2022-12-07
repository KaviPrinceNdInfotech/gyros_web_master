// import React, { Component } from "react";
// import "./Signup.css"
// import logo from "../logo.png"
// import { Link } from "react-router-dom"



// class SignupPage extends Component {

//   constructor() {
//     super()
//     this.state = {
//       name: "",
//       email_id: "",
//       mobile_no: "",
//       password: "",
//       confirmpassword: "",
//       error: "",
//       open: false
//     }
//   }

//   handelChange = name => event => {
//     this.setState({ [name]: event.target.value })
//   }

//   clickSubmit = event => {
//     event.preventDefault()
//     const { name, email_id, password, confirmpassword, mobile_no } = this.state
//     const user = {
//       name, email_id, password, confirmpassword, mobile_no
//     };
//     // console.log(user)

//     this.signup(user)
//       .then(data => {
//         if (data.error) this.setState({ error: data.error })
//         else this.setState({
//           error: "",
//           name: "",
//           email_id: "",
//           password: "",
//           confirmpassword: "",
//           mobile_no: "",
//           open: true



//         })
//       })
//   };

//   signup = (user) => {
//     return fetch("https://api.gyros.farm/api/AdminApi/Registration", {
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
//     const { name, email_id, password, confirmpassword, mobile_no, error, open } = this.state;
//     return (
//       <>
//         <div>
//           <div className=" register">
//             <div className="row">
//               <div className="col-md-3 register-left">
//                 <img src={logo} alt="" />
//                 <h3>Welcome on Gyros</h3>
//                 <p>You are 30 seconds away from earning your own money!</p>
//                 <p>if Your are New Signup Here</p>

//                 <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
//                   <Link to="/accountlogin">
//                     Login Here
//                   </Link>
//                 </button>

//                 <br />
//               </div>
//               <div className="col-md-9 register-right">
//                 <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist" style={{ width: "200px" }}>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link active"
//                       id="home-tab"
//                       data-toggle="tab"
//                       href="#home"
//                       role="tab"
//                       aria-controls="home"
//                       aria-selected="true"
//                       style={{ width: "200px" }}
//                     >
//                       Register on Gyros
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
//                     <h3 className="register-heading">Register on Gyros</h3>
//                     <div className="row register-form">
//                       {/* <div className="alert alert-primary" style={{display: error ? "" : "none"}}>
//                         email required!
//                       </div>
//                       <div className="alert alert-info ml-10" style={{display: open ? "" : "none"}}>
//                         New Account is successfully created.please signin.
//                       </div> */}

//                       <div className="col-md-6">

//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name "
//                             onChange={this.handelChange('name')}
//                             value={name}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="phone"
//                             // value={mobile_no} onChange={(e) => { setMobile_No(e.target.value) }}
//                             onChange={this.handelChange('mobile_no')}
//                             value={mobile_no}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder=" Confirm Password "
//                             // value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
//                             onChange={this.handelChange('confirmpassword')}
//                             value={confirmpassword}
//                           />
//                         </div>


//                         <div className="form-group">

//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Your Email *"
//                             // value={email_id} onChange={(e) => { setEmail_Id(e.target.value) }}
//                             onChange={this.handelChange('email_id')}
//                             value={email_id}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             minLength={10}
//                             maxLength={10}
//                             name="txtEmpPhone"
//                             className="form-control"
//                             placeholder="password "
//                             // value={password} onChange={(e) => { setPassword(e.target.value) }}
//                             onChange={this.handelChange('password')}
//                             value={password}
//                           />
//                         </div>


//                         <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }} onClick={this.clickSubmit}>Register Here</button>
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
// export default SignupPage

import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.png';
// import ApiService from './ApiService';
// import CommonService from './signupService';
// import CommonService from './ApiService';

import Header from "../Header";
export default function Createaccount() {

  const [name, setName] = useState("");
  const [email_id, setEmail_Id] = useState("");
  const [mobile_no, setMobile_No] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

 
  function SignUp() {
    console.warn({ name, email_id, mobile_no, password, confirmpassword });
    let data = { name, email_id, mobile_no, password, confirmpassword }
    fetch("https://api.gyros.farm/api/AdminApi/Registration", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("result", result);
    })
  } 


  return (


    <>
    <Header/>

      <div>
        <div className=" register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src={logo} alt="" />
              <h3>Welcome on Gyros</h3>
              <p>You are 30 seconds away from earning your own money!</p>
              <p>if Your are New Signup Here</p>

              <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
                <Link to="/accountlogin">
                  Login Here
                </Link>
              </button>

              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist" style={{ width: "200px" }}>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    style={{ width: "200px" }}
                  >
                    Register on Gyros
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
                  <h3 className="register-heading">Register on Gyros</h3>
                  <div className="row register-form">
                    {/* <div className="alert alert-primary" style={{display: error ? "" : "none"}}>
                        email required!
                      </div>
                      <div className="alert alert-info ml-10" style={{display: open ? "" : "none"}}>
                        New Account is successfully created.please signin.
                      </div> */}

                    <div className="col-md-6">

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name "
                          value={name} onChange={(e) => { setName(e.target.value) }}
                          // onChange={this.handelChange('name')}
                          // value={name}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="phone"
                          value={mobile_no} onChange={(e) => { setMobile_No(e.target.value) }}
                          // onChange={this.handelChange('mobile_no')}
                          // value={mobile_no}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" Confirm Password "
                          value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
                          // onChange={this.handelChange('confirmpassword')}
                          // value={confirmpassword}
                        />
                      </div>


                      <div className="form-group">

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          value={email_id} onChange={(e) => { setEmail_Id(e.target.value) }}
                          // onChange={this.handelChange('email_id')}
                          // value={email_id}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          minLength={10}
                          maxLength={10}
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="password "
                          value={password} onChange={(e) => { setPassword(e.target.value) }}
                          // onChange={this.handelChange('password')}
                          // value={password}
                        />
                      </div>


                      <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }}  onClick={SignUp}>Register Here</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>


      {/* <div class="nav-logo">
        <Header />
      </div>
      <form onSubmit="return myfun()" >


        <div className='wholeform'>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm col-form-label col-form-label-lg "></label>
            <div class="col-sm-12">
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                class="form-control form-control-lg " name='name' placeholder="Enter Your Name" required />
            </div>
          </div> 
 
          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="email" value={email_id} onChange={(e) => { setEmail_Id(e.target.value) }}
                class="form-control form-control-lg" name="email_id" placeholder="Enter Your Email" required />
            </div>
          </div>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="Number"

                value={mobile_no} onChange={(e) => { setMobile_No(e.target.value) }} id="mobilenumber"
                class="form-control form-control-lg" name='mobile_no' placeholder="Enter Your Phone" required />
              <span id='message'></span>
            </div>
          </div>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                class="form-control form-control-lg" name="password" placeholder="Enter Your Password" required />
            </div>
          </div>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="Password" value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
                class="form-control form-control-lg" name="confirmpassword" placeholder="Re-Enter Password" required />
            </div>
            <div className='sigbtn'>
              {name !== "" && email_id !== "" && mobile_no !== "" && password !== "" && confirmpassword !== "" ?
                <Link to="/Emaillogin">
                  <button type="submit" onClick={SignUp} class=" btn btm1 btn-block loginfont send-button" style={{ backgroundColor: "darkgreen" }}>SignUp</button>
                </Link>
                : <button type="submit" onclick="phonenumber(document.form1.text1)" onClick={SignUp} class=" btn btm1 btn-block loginfont send-button" style={{ backgroundColor: "darkgreen" }}>SignUp</button>}
            </div>
          </div>

        </div>
      </form>
      <br></br> */}

    </>


  );
}