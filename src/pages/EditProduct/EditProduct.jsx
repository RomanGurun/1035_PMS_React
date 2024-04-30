import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import {useEffect,useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const EditProduct = () => {

   const navigate=useNavigate();
    const {id}=useParams();
   const[product,setProduct]=useState({});

    console.log(id);
const handleChange=(e)=>{
    const{name,value}=e.target;
 

    setProduct({

...product,
[name]:value


    });

console.log(product);

}


// edit Product
const editProduct =async(e)=>{
    e.preventDefault();
const response = await axios.put("https://662d26660547cdcde9e012c2.mockapi.io/products"+id);
console.log(response)
if(response.status==200){
    navigate("/singleProduct/"+id);
    
}


}




// fetch product of id
    const fetchProduct=async ()=>{
    const response=await axios.get("https://662d26660547cdcde9e012c2.mockapi.io/products/"+id,product);
console.log(response);
setProduct(response.data);



}
useEffect(()=>{
    fetchProduct()
},[]);



  return (

<>
<Navbar/>

<div class="container">
    <h2>Edit Product</h2>
    <form onSubmit={editProduct}>
   
     <div class="form-group">
    {/* Third APPROACH */}
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" value={product.productName} onChange={handleChange} required/>
        </div>
        <div class="form-group">
        <label for="productImage">Product Image:</label>
        {/*======= onChange elaborate form ans short form is same ======== */}
            <input type="text" id="productImage" name="productImage" onChange={(e)=>setProduct({...product,productName:e.target.value})}  />

         </div>
        <div class="form-group">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4" value={product.productDescription} onChange={(e)=>setProduct({...product,productDescription:e.target.value})}></textarea>
        </div>
        <div class="form-group">
            <label for="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" value={product.productMaterial} onChange={handleChange} required/>
        </div>
        <input type="submit" value="Submit"/>
    </form>
</div>


</>

)
}

export default EditProduct
