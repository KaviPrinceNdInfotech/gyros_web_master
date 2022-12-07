import React, { useEffect, useState } from "react";
import HoverImage from "react-hover-image";
import { Link } from "react-router-dom";
import Checkoutprice from "../Checkoutprice";
import IncDecCounter from "../IncDecCounter"; 
export default function ProductListing() {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState([]);
  const [imgstr, setImg] = useState("");
  const [token, setToken] = useState("");  
  const [finalData, setFinalData] = useState([]);
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  let Rgx = localStorage.getItem('Rgx')
  // console.log("rgxx", Rgx)
  // console.log("aut", auth)
  const getUsers = async () => {
    const responseData =

    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },

    }
    // console.log("==========", 'https://api.gyros.farm/api/ProductApi/AddToCartListWeb/' + Rgx)
    // fetch('https://api.gyros.farm/api/ProductApi/AddToCartListWeb/' + Rgx, responseData)
    //   .then(async (response) => {
    //     // console.log('erf', responseData)
    //     const getUsers1 = await response.json(); 
    //     let temp = []
    //     let img = []
    //     let d1 = ""
    //     // console.log(getUsers);
    //     temp.push(getUsers1)
    //     setUsers(temp);
    //     // console.log("data",temp)
    //     temp.map((retusers, index) => {
    //       retusers.result.map((data) => {
    //         img.push("https://api.gyros.farm/Images/" + data.Name)
    //         data.Image = "https://api.gyros.farm/Images/" + data.Image

    //       })
    //       // console.log("path", retusers.result)
    //       setFinalData(retusers.result)
    //     })
    //     // console.log("img", img)

    //     setImg(img[0])
    //     setImage(img)


    //   })

  }

  useEffect(() => {
    getUsers();
  }, [finalData]);



  return (

    <div>

      <div >
        {/* {console.log('finalData', finalData)} */}

        {finalData.map((data, index) => {

          // console.log("data", data)
          return (


            <>

              <div className="row">
                <div className="col-sm-6">
                  <Link to="/Aboutproductdetails">
                    <HoverImage className="hovrwdthbstslrcrt" src={data.Image}
                      hoverSrc={data.Image} />
                  </Link>
                </div>

                <div className="col-sm" >
                  <h4>{data.ProductName}</h4>
                  <h4 className="bstfprc" style={{ marginTop: "3rem" }}>{data.Price}</h4>
                </div>
                <div>             
                  <IncDecCounter product_id={data.Id}  countdata={data.Count}/>
                </div>
              </div>
              <br />
              <hr></hr>
              <br />
            </>

          )
        })}

      </div>
      <div >
       
        

        <div>
          <Checkoutprice />
        </div>

       

      </div>
      <Link to="./Address">
      <button type="submit" class=" btn btn-block send-button4 loginfont1 loginfont" style={{ marginTop: "1rem" }}>Confirm</button>
      </Link>
    </div>

  );
};