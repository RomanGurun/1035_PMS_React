import React from 'react'
import './AddProduct.css'
import {useState} from 'react'
import Navbar from "../../components/Navbar/Navbar.jsx"
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
const AddProduct = () => {
const navigate=useNavigate();

// First Approach
// const[productImage,setProductImage]=useState("");
// const[productName,setProductName]=useState("");
// const[productDescription,setProductDescription]=useState("");
// const[productMaterial,setProductMaterial]=useState("")

// console.log(productImage,productMaterial);
// const addProduct =async(e)=>{
//     e.preventDefault();
    // reload garda post url mathi url ma pathauna man nlagya e.preventDefault() code
// const response= await axios.post("https://662d26660547cdcde9e012c2.mockapi.io/products",{
//  productImage:productImage,
//  productDescription:productMaterial,
//  productMaterial:productMaterial,
//  productName:productName


//     });

// console.log(response);

// }

// Second Approach
// in this approach no need of write usestate in each code
// const addProduct=async(e)=>{


// e.preventDefault();
// const formData=new FormData(e.currentTarget); ///{}
// // ========================= formdata obj ma attribute aunxa after e.currenttarget ==============================
// console.log(formData);
// console.log(formData.get('productName'));
// console.log(formData.get('productMaterial'));
// const data =Object.fromEntries(formData);
// //  ======================== formdata lai object ko key value ma change garxa =================================
// console.log(data);
// const response = await axios.post("https://662d26660547cdcde9e012c2.mockapi.io/products",data);
// console.log(response);
// }


// Third Approach


const[data,setData]=useState({
    productName:"",
    productDescription:"",
productMaterial:"",
productImage:""


})


const handleChange = (e)=>{
    // console.log(e.target.name,e.target.value);
const {name,value}=e.target;
setData({
...data,
// hya ..data lya new data line out khol banaunxa and new value set gareko placed in one by one in khol cover.................
[name]:value

})
}

const addProduct=async (e)=>{
    e.preventDefault();
const response=await axios.post("https://662d26660547cdcde9e012c2.mockapi.io/products",data);
console.log(response);
if(response.status ==201){

    //================ window.location.href="/" yesko satta we write below to prevent loading in react ========================
    navigate("/");
    
}else{
    alert("something went wrong.try Again")
}

}
// console.log(data);




return (
<>
<Navbar/>

<div class="container">
    <h2>Add Product</h2>
    <form onSubmit={addProduct}>
        {/* <div class="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" onChange={(e)=>setProductName(e.target.value)} required/>
        </div>
        <div class="form-group">
        <label for="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" onChange={(e)=>setProductImage(e.target.value)} />

         </div>
        <div class="form-group">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}></textarea>
        </div>
        <div class="form-group">
            <label for="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)}required/>
        </div> */}

     <div class="form-group">

{/* name ma backend ko jun variable lya store gareko xa,do write that var. */}
            {/* <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName"  required/>
        </div>
        <div class="form-group">
        <label for="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" />

         </div>
        <div class="form-group">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4"></textarea>
        </div>
        <div class="form-group">
            <label for="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" required/>
        </div> */}
        {/* Third APPROACH */}
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" onChange={handleChange} required/>
        </div>
        <div class="form-group">
        <label for="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" onChange={handleChange} />

         </div>
        <div class="form-group">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange}></textarea>
        </div>
        <div class="form-group">
            <label for="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" onChange={handleChange} required/>
        </div>
        <input type="submit" value="Submit"/>
    </form>
</div>



</>   


)
}

export default AddProduct
