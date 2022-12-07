// import React, { useState, useEffect } from "react";
// import Carousel from "react-grid-carousel";
// import Header from "./Header";
// import { Link } from "react-router-dom";
// export default function Orderhistory() {
//     const [users, setUsers] = useState([]);
//     const [token, setToken] = useState("");
//     const auth = localStorage.getItem('loginToken')
//     const Id = localStorage.getItem('ID')
//     const getUsers = async () => {
//         const responseData =

//         {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${auth}`,
//                 "Content-Type": "application/json",
//             },

//         }

//         fetch('https://api.gyros.farm/api/Order/OrderHistory/' + Id)
//             .then(async (response) => {

//                 const getUsers1 = await response.json();
//                 let temp = []

//                 temp.push(getUsers1)

//                 temp.map((retusers, index) => {
//                     retusers.result.map((data) => {
//                         setUsers(retusers.result)

//                     })

//                 })

//             })

//     }
//     useEffect(() => {
//         getUsers();
//     }, []);

//     return (
//         <div>

//             <div>
//                 <Header />
//             </div>

//             <div style={{ marginTop: "2rem" }}>

//                 <h1 style={{ textAlign: "center", color: "green" }}><b>Order History</b></h1>
//                 <Carousel scrollSnap={true} cols={3} rows={1} gap={0}>
//                     {users.map((data, index) => {
//                         return (

//                             <Carousel.Item> 

//                                     <div className="card addcrdclr" style={{ height: "20rem", marginTop: "-1rem" }}>
//                                         <div className="card__copy" >
//                                             <h6>OrderId : {data.OrderId}</h6>
//                                             <h6>Name : {data.Name}</h6>
//                                             <h6>Mobile : {data.Mobile}</h6>
//                                             <h6>Email : {data.Email}</h6>
//                                             <h6>Total_Item : {data.Total_Item}</h6>
//                                             <h6>Price : {data.Price}</h6>
//                                             <h6>ProductName : {data.ProductName}</h6>
//                                             <h6>Date : {data.Date}</h6>
//                                         </div>
//                                     </div>


//                             </Carousel.Item>

//                         )
//                     })}
//                 </Carousel>
//             </div>
//             <div class="">
//                 <Link to="/Addaddress">
//                     <button class="btn btn-primary" style={{ textAlign: "center" }}>Add Address</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

import React from 'react'
import Header from "./Header"

function Orderhistory() {
    return (
        <>
            <Header />
            <>
                {/* component */}
                <section className=" mx-auto p-6 font-mono">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-md  space-x-2 font-sm tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th className="text-center">SI NO</th>
                                        <th className="text-center">Date</th>
                                        <th className="text-center">Order Id</th>
                                        <th className="text-center">Customer Name</th>

                                        <th className="text-center">Product Name</th>
                                        <th className="text-center">Amount</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Shipping Address</th>
                                        <th className="text-center">Mobile No</th>
                                        <th className="text-center">Payment Mode</th>

                                        <th className="text-center">Status</th>
                                        <th className="text-center">Action</th>


                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                    <tr className="text-gray-900">
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-sm border">28/11/2022</td>
                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <p>#0885445798</p>

                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Vishnu tiwari{" "}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 border ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-16 h-8 mr-3 rounded-full">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> stone cold Pressed yellow mustard oil</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">768Rs</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">1</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                Noida c-53 sector-2
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">xxxxxxx378</td>
                                        <td className="px-4 py-3 text-sm border">Online</td>
                                        <td className="px-4 py-3 border ">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {" "}
                                                Acceptable{" "}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-700 rounded">
                                                View Details
                                            </button>
                                        </td>

                                    </tr>
                                  
                                  

                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default Orderhistory
