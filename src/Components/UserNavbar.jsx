import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="UserNavbar">
            <h1>Navbar</h1>
            <div className="navbar">
                <div className="logo">
                    <h1>User Portal</h1>
                </div>
                <div className="navlist">
                <Link to="/user/">DashBoard</Link>
                <Link to="/user/booklist">Book Lists</Link>
                <Link to="/user/adduser">Logout</Link>
                <Link to="/">Logout</Link>
                
            </div>
            </div>

        </div>
     );
}
 
export default UserNavbar;