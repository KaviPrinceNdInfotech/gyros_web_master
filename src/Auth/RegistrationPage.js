
import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import {RegPage} from "../Action";
import "../Accounts/Signup.css"


function RegistrationPage() {
    const auth = useSelector(state=>state.auth); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email_id, setEmail_Id] = useState("");
    const [mobile_no, setMobile_No] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
 
    const regData=()=>{
          const data={name,email_id,mobile_no,password,confirmpassword};
          dispatch(RegPage(data));
         
          if(auth.status===200){ 
    		navigate("/")

    	}
     }
 
    
 
    return (
        <div>
            <div className=" register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome on Gyros</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <p>if Your are New Signup Here</p>

                        <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
                            <Link to="/loginnew">
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name "
                                              value={name} onChange={(e) => { setName(e.target.value) }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="phone"
                                              value={mobile_no} onChange={(e) => { setMobile_No(e.target.value) }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" Confirm Password "
                                              value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
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
                                            />
                                        </div>


                                        <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }}  onClick={(e)=>regData()}>Register Here</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegistrationPage




