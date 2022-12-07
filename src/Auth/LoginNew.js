import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { LoginNew } from "../Action";
import "../Accounts/Signup.css"





function LoginNeww() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("");

    const loginData = () => {
        const data = { Email, PassWord };
        dispatch(LoginNew(data));
    }
    if (auth.status === 200) {
        navigate("/")

    } 


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
                                <Link to="/registrationpage">
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
                                                        onChange={(e) => setEmail(e.target.value)}

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
                                                    onChange={(e) => setPassWord(e.target.value)}

                                                />
                                            </div>



                                            <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "123px" }} onClick={(e) => loginData()}>Login</button>
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
    )
}

export default LoginNeww

