import React, { useState,useEffect } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function App() {

    

    
    const [staticModal, setStaticModal] = useState(false);

    const toggleShow = () => setStaticModal(!staticModal);

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");

    function SignUp() {
        console.warn({ Name, Email, Mobile });
        let data = { Name, Email, Mobile }
        fetch("https://api.gyros.farm/api/AdminApi/AddHealthFraiend", {
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
  
            <MDBModal show={staticModal} setShow={setStaticModal}>
                <MDBModalDialog >
                    <MDBModalContent style={{ width: "27rem", height: "27rem" }}>

                        <MDBBtn className='btn-close' color='red' onClick={toggleShow} style={{ bottomTop: "-3rem" }}></MDBBtn>

                        <div className='responsiveForm'>
                            <h1 className='contentpopup  bestseller' style={{ color: "#3bbf10" }}><b>Hii Healthy Friends !!! </b> </h1>
                            <h3 className='text-black font-bold text-xl' style={{ marginTop: "-2rem" }}> Overwhelmed to see you here.
                            </h3>
                            <div className='flex' style={{ marginLeft: "164px" }}>
                                <h3 className='text-black font-bold text-md' style={{ marginLeft: "-2rem" }}>
                                    Sending Our Love
                                </h3>
                                <h3 className="" style={{ color: "red", marginTop: "-1px", fontSize: "20px", marginLeft: "10px" }}>♥</h3>
                            </div>
                            <h3 className='text-black font-bold text-sm' style={{marginLeft:"-2rem"}}>
                                (Special Discount Coupon)
                            </h3>

                            <form class="popup">
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
                                    <div class="col-sm-10">
                                        <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} class="form-control namecontrol form-control-lg" id="name" placeholder="Enter Your Name" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
                                    <div class="col-sm-10">
                                        <input type="text" value={Email} onChange={(e) => { setEmail(e.target.value) }} class="form-control namecontrol form-control-lg" id="name" placeholder="Enter Your Email" />
                                    </div>
                                </div>

                                <div class="form-group row ">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
                                    <div class="col-sm-10">
                                        <input type="number" value={Mobile} onChange={(e) => { setMobile(e.target.value) }} class="form-control namecontrol form-control-lg focus:outline-green-400" id="name" placeholder="Enter Your Mobile" />
                                    </div>

                                </div>
                                <button type="submit" onClick={SignUp} class=" rounded-full p-2 w-52 mb-10 ml-16 border-none text-white focus:outline-none" style={{ background: "#3bbf10", border: "none" }}>Get Your Discount</button>
                            </form>


                        </div>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
