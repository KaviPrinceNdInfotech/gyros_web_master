import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Addreview() {
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setopen] = useState("")
  const Id = localStorage.getItem('ID')
  const [id, setId] = useState("");
  const [productid,setProductId]=useState("");
// console.log('hhhh', id)

  function Addreview() {
    // console.log({ name, email,title,description, productid});
    let data = { name,email,title,description,productid  }
    data.productid= localStorage.getItem("product_id2", id);

    // console.log("DDDD",data.productid);

    fetch(" https://api.gyros.farm//api/AdminApi/AddReview", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    }).then((result) => {
    //   console.log("result", result);
    })
  } 

  useEffect(() => {
    // console.log("props", localStorage.getItem('product_id'))
    let P_id = localStorage.getItem("product_id2", id)

    // console.log("Product Id",P_id);
    // setId(P_id)
    // Addreview(props.product_id);


}, []);

    
    return (
        <div>
            <div>
                <Button

                    onClick={() => setopen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                
                >
                    Write Review
                </Button>
                <Collapse in={open} style={{visibility:"visible"}}>
                    <form style={{ marginTop: "2rem",  }} onSubmit="return myfun()" >
                        <div class="form-group">
                            <label for="exampleInputEmail1" style={{ marginLeft: "-27rem" }}>Name</label>
                            <input type="name"value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" style={{ marginLeft: "4rem", width: "52%" }} />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ marginLeft: "-27rem" }}>Email</label>
                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Enter your Email" style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>

                        <div className="rate" style={{ marginLeft: "3rem" }}>
                            <input type="radio" id="star5" name="rate" defaultValue={5} />
                            <label htmlFor="star5" title="text">
                                5 stars
                            </label>
                            <input type="radio" id="star4" name="rate" defaultValue={4} />
                            <label htmlFor="star4" title="text">
                                4 stars
                            </label>
                            <input type="radio" id="star3" name="rate" defaultValue={3} />
                            <label htmlFor="star3" title="text">
                                3 stars
                            </label>
                            <input type="radio" id="star2" name="rate" defaultValue={2} />
                            <label htmlFor="star2" title="text">
                                2 stars
                            </label>
                            <input type="radio" id="star1" name="rate" defaultValue={1} />
                            <label htmlFor="star1" title="text">
                                1 star
                            </label>
                        </div>


                        <br></br>
                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ marginLeft: "-38rem", marginTop: "2rem" }}>Review Title </label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Review Title " style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ marginLeft: "-21rem" }}>Review Comments  </label>
                            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Write Review here.... " style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>   
                                
                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ marginLeft: "-21rem" }}>Image Upload</label>
                            <input type="file"  class="form-control" id="exampleInputPassword1"  style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>  

                        <button type="submit" onClick={Addreview} class="btn btn-primary">Submit Review</button>
                    </form>

                </Collapse>
            </div>
        </div>
    )
}