import { Link } from "react-router-dom";

 
 function NavBar()
 {
return<>
<div className="Navbar-container">
<Link to="/home">Home</Link>
<Link to="/pagination">Pagination</Link>
</div>
</>
 }
 export default NavBar;