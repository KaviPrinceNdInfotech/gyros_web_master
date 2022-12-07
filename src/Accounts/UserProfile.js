import React from 'react'
import {Link} from "react-router-dom"
import "./UserProfile.css"
function UserProfile() {
  return (
    <div>
        <div class=" rounded  mt-5" >
        <div class="row ">
            <div class="col-md-4 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90"/><span class="font-weight-bold">Vishal mishra</span><span class="text-black-50">Vishal12@bbb.com</span><span>Noida uttar pardesh</span></div>
            </div>
            <div class="col-md-8" style={{width:"700px"}}>
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex flex-row align-items-center back">
                            <i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <Link to="/">
                            <h6>Back to home</h6>
                            </Link>
                            

                        </div>
                        <Link to="/editprofile">
                        <h6 class="text-right">Edit Profile</h6>
                        </Link>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" value="Vishal Mishra"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="Mishra" placeholder="Last Name"/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" value="Vishal12@bbb.com"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="+91xxxxx378" placeholder="Phone number"/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="address" value="c-57, Noida Uttar Pardesh"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="India" placeholder="Country"/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="Bank Name" value="Bank of India"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" value="043958409584095" placeholder="Account Number"/></div>
                    </div>
                    <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default UserProfile
