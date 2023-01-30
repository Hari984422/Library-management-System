import '../Styles/adminDashBoard.css'
import { Link } from 'react-router-dom';
const AdminDash = () => {
    return ( 
        <div className="admindashboard">
            {/* <div className="info">
                <p> Postgraduate Open Evening-1 Febrauary 2023 Book now -> </p>
                <img src="" alt="" />
            </div>
            <div className="image">
                <img src="images\pexels-pixabay-261895.jpg" alt="" />
            </div> */}
            <div className="admindetails">
                <img src="/images/orange.jpg" alt="" />
                <div className="admininfo">
                    <h2>Innovative Library Solutions</h2>
                    <p>"Unleash the power of knowledge with our Library Management System. Organize, automate and optimize your library's operations for unparalleled efficiency and patron satisfaction."</p>
                    <Link to="/user/booklist">View Book List -></Link>
                </div>
            </div>
        </div>
     );
}
 
export default AdminDash;