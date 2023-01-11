import { Link } from "react-router-dom";
import '../Styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar">
                <div className="logo">
                    <h1>Admin Portal</h1>
                </div>
                <div className="navlist">
                <Link to="/admin/">DashBoard</Link>
                <Link to="/admin/addbooks">Add Books</Link>
                <Link to="/admin/adduser">Add Users</Link>
                <Link to="/admin/booklist">Book List</Link>
                <Link to="/admin/userlist">User List</Link>
                <Link to="/">Logout</Link>
                
            </div>
            </div>

        </div>
     );
}
 
export default AdminNavbar;