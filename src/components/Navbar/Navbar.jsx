
import './Navbar.css'
import {Link,useNavigate} from 'react-router-dom'
const Navbar = () => {
// const navigate=useNavigate();

  return (
    <div className="navbar">
  {/* <a href="/">Home</a> */}
  <Link to="/">Home</Link>
{/* <a href="/addProduct">Add Blog</a> */}
<Link to="/addProduct">Add Product</Link>

{/* <button onClick={()=>navigate("/addProduct")}>Add Product</button> */}

</div>

  )
}

export default Navbar
