import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Checkoutprice() { 
    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()
    
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
                // console.log('erf', Id)
                const getUsers1 = await response.json();
                let temp = []
                // console.log(getUsers1);
                temp.push(getUsers1)
                setUsers(temp);
                // console.log("data", temp)
                temp.map((retusers, index) => {

                    // console.log("path", users)
                })

            })

    }
    useEffect(() => {
        getUsers();
    }, [users]);

    return (
        <div>
            <div>
                {users.map((data, index) => {

                    return (

                        <div>
                            

                            <div style={{ textAlign: "left" }}>

                                <h6><b>Total Price :</b></h6>
                            </div>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}