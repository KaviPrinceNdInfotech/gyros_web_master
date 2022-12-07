import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import HoverImage from "react-hover-image";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Addreview from "./Addreview";
export default function Review() {

    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const [image, setImage] = useState([]);
   
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        // console.log('  https://api.gyros.farm/api/AdminApi/ViewReview/' + id)
        const response = await fetch('  https://api.gyros.farm/api/AdminApi/ViewReview/' + id);
        const getUsers = await response.json();

        let data = getUsers.result
        // console.log("getUsers", getUsers.result)
        data.map((res) => {
            res['Image'] = "https://api.gyros.farm/Images/" + res.Image
        })


        setImage(data)
    }

    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id'))
        let p_id = localStorage.getItem("product_id2", id)
        setId(p_id)
        getUsers(p_id);
    }, []);


    return (
        <div>
            <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "2rem" }} className="bestseller wholesome"><b>Review</b></p>

            <div>
              <Addreview />
               

                <div >
                    {image.map((data, index) => {

                        // console.log("data", data)
                        return (
                            <div style={{ marginLeft: "3.5rem" }}>

                                {/* <HoverImage className="hovrwdthbstslr" src={data.Image}
                                    hoverSrc={data.Image} /> */}

                                <div > <p className="aboutdesc"  ><i class="fas fa-thumbs-up "></i> <b>{data.Name}</b></p></div>
                                <div className="star1">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span>(180)</span>

                                </div>
                                {/* <p className="aboutdesc">{data.Mobile}</p>
                                <p className="aboutdesc">{data.Email}</p> */}
                                <p className="aboutdesc">{data.Title}</p>
                                <p className="aboutdesc">{data.Description}</p>

                                <hr></hr>

                                <div className="flex ">
                                    <p className="aboutdesc">{data.Rating1}</p>
                                    <p className="aboutdesc">{data.Rating2}</p>
                                    <p className="aboutdesc">{data.Rating3}</p>
                                    <p className="aboutdesc">{data.Rating4}</p>
                                    <p className="aboutdesc">{data.Rating5}</p>
                                </div>


                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}