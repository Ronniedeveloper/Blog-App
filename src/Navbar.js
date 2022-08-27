import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="navbar">
            <h1>The Discussion</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    );
};

export default Navbar;