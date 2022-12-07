import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
export default function (props) {

    const [Name, setNAME] = useState("");
    const [Mobile, setMOBILE] = useState("");
    const [State, setSTATE] = useState("");
    const [City, setCITY] = useState("");
    const [Area, setAREA] = useState("");
    const [PinCode, setPINCODE] = useState("");

    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')

    useEffect(() => {
        console.log("props", localStorage.getItem('product_id'))
        let P_id = localStorage.getItem("product_id2", id)
        setId(P_id)
        Addtocart3(props.product_id);


    }, []);



    function Addtocart3(pId) {

        let data = { Id }
        console.log("alll", Id)
        data = { "Id": Id }
        console.warn({ Name, Mobile, State, City, Area, PinCode });
        let data1 = { Name, Mobile, State, City, Area, PinCode }
        fetch("https://api.gyros.farm/api/AdminApi/DeliveryAddress/" + Id,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data1)
            }).then((result) => {
                console.warn("result", result);
            })
    }

    return (
        <div>

            <div>
                <Header />
            </div>
            <>
                <title>form</title>

                <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n\t\t.container{\n\t\t\tmargin-top: 8%;\n\t\t\twidth: 400px;\n\t\t\tborder: ridge 1.5px white;\n\t\t\tpadding: 20px;\n\t\t}\n\t\tbody{\n\t\t\tbackground: #E0EAFC;  /* fallback for old browsers */\nbackground: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n\t\t}\n\t"
                    }}
                />
                <div>
                </div>
                <div className="container" style={{ marginTop: "2rem" }}>
                    <h2 style={{ marginTop: "-2.2rem", marginLeft: "4rem" }}><b>Add Address</b></h2>
                    <form action="bootstrapform.php" method="post">
                        <div className="form-group" >
                            <label htmlFor="firstname" style={{ marginTop: "2rem" }}>Name</label>
                            <input
                                type="text"
                                value={Name} onChange={(e) => { setNAME(e.target.value) }}
                                className="form-control"
                                id="exampleInputfirstname"
                                name="firstname"
                                style={{ marginLeft: "7.5rem" }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Mobile</label>
                            <input
                                type="number"
                                value={Mobile} onChange={(e) => { setMOBILE(e.target.value) }}
                                className="form-control"
                                id="exampleInputlastname"
                                name="lastname"
                                style={{ marginLeft: "7.5rem" }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneno">State</label>
                            <input
                                type="text"
                                value={State} onChange={(e) => { setSTATE(e.target.value) }}
                                className="form-control"
                                id="exampleInputphoneno"
                                name="phoneno"
                                style={{ marginLeft: "7.5rem" }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Password">City</label>
                            <input
                                type="text"
                                value={City} onChange={(e) => { setCITY(e.target.value) }}
                                className="form-control"
                                id="exampleInputPassword"
                                name="password"
                                style={{ marginLeft: "7.5rem" }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Password">Address</label>
                            <input
                                type="text"
                                value={Area} onChange={(e) => { setAREA(e.target.value) }}
                                className="form-control"
                                id="exampleInputPassword"
                                name="password"
                                style={{ marginLeft: "7.5rem" }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Password">PinCode</label>
                            <input
                                type="number"
                                value={PinCode} onChange={(e) => { setPINCODE(e.target.value) }}
                                className="form-control"
                                id="exampleInputPassword"
                                name="password"
                                style={{ marginLeft: "7.5rem" }}
                            />
                        </div>
                        <div class="input-group-prepend">
                            {Name !== "" && Mobile !== "" && State !== "" && City !== "" && Area !== "" && PinCode !== "" ?
                                <Link to="/Address">
                                    <button class="btn btn-outline-primary" type="button" onClick={() => Addtocart3(props.product_id)}>Add Address</button>
                                </Link>

                                : <button class="btn btn-outline-primary" type="button" onClick={() => Addtocart3(props.product_id)} style={{PaddingTop : "-2rem"}}>Add Address</button>
                            }
                        </div>
                    </form>
                </div>
            </>


        </div>
    )
}