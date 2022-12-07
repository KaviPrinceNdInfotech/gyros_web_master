import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import Header from "./Header";
import { Link } from "react-router-dom";
export default function Address() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  const getUsers = async () => {
    const responseData =

    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },

    }

    fetch('https://api.gyros.farm/api/AdminApi/ListAddress/' + Id)
      .then(async (response) => {
        console.log('erf', responseData)
        const getUsers1 = await response.json();
        let temp = []
        // console.log(getUsers);
        temp.push(getUsers1)
        // setUsers(temp); 
        // console.log("data", temp)
        temp.map((retusers, index) => {
          retusers.result.map((data) => {
            setUsers(retusers.result)

          })
          // console.log("path", users)
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

      <div style={{ marginTop: "2rem" }}>
        {/* {console.log("mmm", users)} */}
        <h6 style={{textAlign:"center" , color:"green"}}><b>Address List</b></h6>
        <Carousel scrollSnap={true} cols={3} rows={1} gap={0}>
          {users.map((data, index) => {
            return (

              <Carousel.Item  >
                <Link to="/Placeorder" state={{ addressData: data }}>
                <div className="card addcrdclr" style={{ height: "20rem" , marginTop:"-1rem" }}>
                  <div className="card__copy" style= {{textAlign:"justify"}} >
                    <h4 style={{ color: "black" }}><b>Address</b></h4>
                    <p >Name : {data.Name}</p>
                    <p >Mobile : {data.Mobile}</p>
                    <p >Area : {data.Area}</p>
                    <p >PinCode : {data.PinCode}</p>
                    <p >City : {data.City}</p>
                  </div>
                </div>
                </Link>

              </Carousel.Item>

            )
          })}
        </Carousel>
      </div>
      <div class="">
        <Link to="/Addaddress">
        <button class="btn btn-primary" style={{ textAlign: "center" }}>Add Address</button>
        </Link>   
      </div>
      
    </div>

  )
}