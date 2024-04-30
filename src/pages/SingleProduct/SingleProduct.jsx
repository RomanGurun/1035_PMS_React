import axios from 'axios';
import React from 'react'
import './SingleProduct.css';
import Navbar from '../../components/Navbar/Navbar'
import { useParams} from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import App from '../../App';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SingleProduct = () => {
    const navigate=useNavigate();

const {id}=useParams();
// store products data comingin object
// ============i think id obj key aunxa if {id} done gare ============
const[product,setProduct]=useState({});
console.log(id);


// delete Product
const deleteProduct =async(id)=>{
    // const response = await axios.delete("https://662d26660547cdcde9e012c2.mockapi.io/products/"+id);
    const response = await axios.delete("https://662d26660547cdcde9e012c2.mockapi.io/products/" + id);

console.log(response);
if(response.status ==200){

navigate("/");

}else{
    alert("Something went wrong.Try Again !");
}

}





// fetch Single Product

const fetchSingleProduct=async ()=>{
    const respsonse = await axios.get("https://662d26660547cdcde9e012c2.mockapi.io/products/"+id);
setProduct(response.data);

// console.log(product);

}

useEffect(()=>{
    fetchSingleProduct()
},[])

// console.log(product);



    return (

<>

<Navbar/>
<div  className="card">
    <img src={product.productImage} alt="Product Image"/>
    <div className="content">
      <div className="productName">{product.productName}</div>
      <div className="productDescription">{product.productDescription}</div>
      <mark>
      <p>{product.productMaterial}</p> </mark>
<button onclick={()=>deleteProduct(product.id)}>Delete</button>
<button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>
     </div>
  </div>


</>

  )

}

export default SingleProduct;
