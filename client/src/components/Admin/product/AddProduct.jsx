import React, { useState } from 'react'
import './addproduct.css'
import axios from 'axios'

function AddProduct() {

    let [productName,setProudctName]=useState('')
    let [productPrice,setProductPrice]=useState('')
    let [productDescription,setproductDescription]=useState('')
   let [categrie,setcategrie]=useState('')
    let postData=async()=>{
      console.log("product name",productName)

        let Data={
            productName,productPrice,productDescription,categrie
        }
        console.log("data",Data)
        
       await axios.post('http://localhost:8080/addproduct',Data)

        
    }
    // let [productDescription]
  return (
    <div className="addproduct-wraper">
        <div className="product">

        <label>product Name</label>
        <input type="text"
        
        onChange={(e)=>setProudctName(e.target.value)}
        
        ></input>
        <label>product price</label>
        <input type="text"
        
        onChange={(e)=>setProductPrice(e.target.value)}
        
        ></input>


<label>product categries</label>
        <input type="text"
        
        onChange={(e)=>setcategrie(e.target.value)}
        
        ></input>
{/* <label>product price</label>   */}
        <textarea rows="9" placeholder='product description'
            onChange={(e)=>setproductDescription(e.target.value)}
            ></textarea>


        <div> <button>upload Image</button></div>
       


        </div>
         <div className="list-button">
            <button onClick={postData}>add product</button>
         </div>
    </div>
  )
}

export default AddProduct