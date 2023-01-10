import { Link } from "react-router-dom";
import '../Styles/landingPage.css'
const LandingPage = () => {
    return ( 
        <div className="fullformPage">
    <div className="landingPage">
        <div className="selectLogin">
        <h1>
            Library Management System
        </h1>
        <div className="form_class">
            
        <div className="admin_login">
        <img width="100px" src="/images/a2.png" alt="" />
        <Link to='/admin-login' id="adminlink">Admin Login</Link>
        </div>
        {/* directly links to url of admin-login */}
        <div className="user_login">
        <img width="100px" src="/images/a1.png" alt="" />
        <Link to='/user-login' id="userlink">User Login</Link>
        </div>
        </div>
        </div>
        </div>
    </div> 
    );
}
 
export default LandingPage;