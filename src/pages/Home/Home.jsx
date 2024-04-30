import React from 'react'
import './Home.css'
import {useState} from 'react'
import  Navbar from '../../components/Navbar/Navbar.jsx';
import {useEffect} from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct.jsx';



const Home = () => {
const [products,setProducts]=useState([]);
const navigate=useNavigate();

const fetchProducts=async()=>{

const response = await axios.get('https://662d26660547cdcde9e012c2.mockapi.io/products');
setProducts(response.data);

console.log(response);
}

useEffect(()=>{
fetchProducts();


},[])
console.log(products);



return (
<>
<Navbar/>
<div className="card-container">

{
  products.map((product)=>{
return(
    <div key={product.id} className="card">
      {console.log(product.id)}
    <img src={product.productImage} alt="Product Image"/>
    {console.log(product.productImage)}
    <div className="content">
      <div className="productName">{product.productName}</div>
      <div className="productDescription">{product.productDescription}</div>
   /   <p>{product.productMaterial}</p>
  {/* / //  <Link to={`/singleProduct/${product.id}`}>see More</Link> */}
     <button onClick={()=>navigate("/SingleProduct")}>See More</button>
     </div>
  </div>
)

})
}

</div>
  </>

  )
}

export default Home
