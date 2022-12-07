import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

export default function Placeorder() {
    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()
    const { addressData } = location.state
    const getUsers = async () => {
        const responseData =

        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth}`,
                "Content-Type": "application/json",
            },

        }

        fetch('https://api.gyros.farm/api/ProductApi/Checkout/' + Id)
            .then(async (response) => {
                console.log('erf', Id)
                const getUsers1 = await response.json();
                let temp = []
                console.log(getUsers1);
                temp.push(getUsers1)
                setUsers(temp);
                console.log("data", temp)
                temp.map((retusers, index) => {

                    console.log("path", users)
                })

            })

    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>

            <div>
                <Header />
            </div>

            <div className="placed">
                <h6><b>Order Placed</b></h6>
            </div>

            <div style={{ marginLeft: "3rem ", marginRight: "3rem" }}>
                <p className="shppngadd"><b>Shipping Address</b></p>
                <div>
                    {users.map((data, index) => {

                        return (

                            <div>
                                {console.log('addressData', addressData)}
                                <div style={{ textAlign: "left" }}>
                                    <p>Name : {addressData.Name}</p>
                                    <p>Mobile : {addressData.Mobile}</p>
                                    <p>State : {addressData.State}</p>
                                    <p>City : {addressData.City}</p>
                                    <p>Area : {addressData.Area}</p>
                                    <p>Pin Code : {addressData.PinCode}</p>

                                </div>
                                <hr></hr>

                                <div style={{ textAlign: "left" }}>
                                    <h6><b>TOTAL PRICE :</b> <b >{data.result.TotalPrice}</b></h6>
                                    <h6><b>DISCOUNT : </b> <b >{data.result.Discount}</b></h6>
                                    <h6><b>DELIVERY CHARGE : </b> <b >{data.result.DeliveryCharge}</b></h6>
                                    <h6><b>Final Cost : </b> <b >{data.result.TotalCost}</b></h6>
                                </div>
                                <Link to="/Orderplaced" state={{price:data.result.TotalPrice}}>
                    <button class="btn btn-primary" style={{ textAlign: "center", marginTop: "3rem" }}>Place Order</button>
                </Link>
                            </div>
       

                        )
                    })}
                </div>
            </div>






        </div>
    )
}