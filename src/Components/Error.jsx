import { Link } from "react-router-dom";
import '../Styles/Errror.css'
const Error = () => {
    return ( 
    <div className="error">
        <marquee behavior="alternate" direction="right">
        <h1>!oops Page Not Found</h1>
        </marquee>
        <Link to="/">Go to home </Link>
        </div>
    );
}
 
export default Error;