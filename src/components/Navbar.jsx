import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 ,display:"grid" , gridTemplateColumns:"100px 100px 100px  100px 100px 100px 100px" ,justifyContent:"center" }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <NavLink to="/about" style={{color:"white"}}>About</NavLink>
      <NavLink to="/products" style={{color:"white"}}>Products</NavLink>
      <NavLink to="/products/men" style={{color:"white"}}>Men</NavLink>
      <NavLink to="/products/women" style={{color:"white"}}>Women</NavLink>
      <NavLink to="/products/kids" style={{color:"white"}}>Kids</NavLink>
      <NavLink to="/products/homedecor" style={{color:"white"}}>Homedecor</NavLink>

    </nav>
  );
};
