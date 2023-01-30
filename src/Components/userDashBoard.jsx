import '../Styles/userdashboard.css'
import { Link } from 'react-router-dom';
const UserDashBoard = () => {
    return (
        <div className="UserDashBoard">
            {/* <div className="details">
            <div className="search">
                <h1>Find your course</h1>
                <div className="input">
                    <input type="text" placeholder="Accounting,History,Engineering..." />
                    <button>Search</button>
                </div>
                <a href="">Browse by subject -></a>
                <a href="">Postgrad courses -></a>
                <a href="">Download prospectus -></a>
            </div>
            <div className="both">
                <div className="openday">
                    <h1>4 March Open Day</h1>
                    <p>Talk to our expert tutors and explore our courses, campuses, facilities, accommodation and student support services. Get the chance to learn more about the application process, student finance and our range of financial support.</p>
                    <a href="">Book now -></a>
                </div>
                <div className="open2">
                    <h1>Virtual Tours</h1>
                    <p>Can't make it in person? Take a virtual tour.</p>
                    <a href="">Explore Campuses Online -></a>

                </div>
            </div>
            </div>
            <div className="description">
                <p>We are an ambitious community of students and academics with no limits on where you come from and no limits on what you can do next. Our three campuses in London and Kent are where minds meet, ideas spark and new adventures begin.</p>
                <a href="">Why Greenwich -></a>
            </div> */}
            <div className="userHeader">
                <h1>Welcome to user DashBoard</h1>
            </div>
            <div className="userdetails">
                <img src="/images/orange.jpg" alt="" />
                <div className="details">
                    
                    <h2>Learning Lab</h2>
                    <p>"Open the door to a world of knowledge and adventure with books. Let the stories take you on a journey, the characters become your friends and the words become your guide."</p>
                    <Link to="/user/booklist">View Book List -></Link>
                </div>
            </div>
        </div>
    );
}

export default UserDashBoard;