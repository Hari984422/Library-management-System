import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/USerLogin.css'

const UserLogin = () => {
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState("");
    let navigate = useNavigate();
    let data = {email,password}
    let handleLogin = (e) =>
    {
        e.preventDefault(); //Stopping reloading 
        console.log(data);
        navigate('/user-login/') //navigating to user-login home page
    }
    return(
        <div className="userLogin">
            <div className="form">
                <h1>Sign In User</h1>
                <div className="form_input1">
                   <form action="" onSubmit={handleLogin} > 
                   <div className="email">
                   <label htmlFor=""> Email</label>
                   <br />
                   <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                   </div>
                   <div className="password">
                   <label htmlFor="">Password</label>
                   <br />
                   <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                </div>
                <button >Login</button>

                   </form>
                </div>
            </div>
        </div>
       
    )
}
export  default UserLogin;