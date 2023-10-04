import React from 'react'
import Slider from '../../mainbody/slider/Slider'
import './product.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function Product() {
    const [productdata, setProductData] = useState([]);
    let serialNo=1;

    let getproductDetail = async () => {
      try {
        let response = await axios.get('http://localhost:8080/');
        let dataitem = response.data;
        setProductData(dataitem);
        console.log(dataitem);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
  
    useEffect(() => {
      getproductDetail();
    }, []);

  return (
    <div className="product-wraper">
        
        <div className="add-product">
            <Link to="/addproduct"><button> add product</button></Link>
        </div>

        <div className="product-table">
            <table > 
                <thead>

                   
                    <tr>
                    <th>S.No</th>
                        <th>Product Name</th>
                        {/* <th>Product Description</th> */}
                        <th>Product Price</th>
                        <th>Delted </th>
                        <th>update</th>
                    </tr>
                
                </thead>
                <tbody>
                {productdata.map(item=>(
                          <tr>
                          <td>{serialNo++}</td>
                          <td>{item.productName}</td>
                          <td>{item.productPrice}</td>
                          <td><button>delete</button></td>
                          <td><button>updated</button></td>
                          
                          {/* <td>shirt</td> */}
                      </tr>



                    ))}
                  


                    

                  


                </tbody>

            </table>
        </div>
    </div>
  )
}

export default Product;