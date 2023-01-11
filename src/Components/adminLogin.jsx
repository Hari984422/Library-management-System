import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/adminLogin.css'
const AdminLogin = () => {

    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let navigate = useNavigate()
    let handleLogin = (e) => { //e is the parameter used to e.preventDefault no need to give e as parameter when we are calling this metoh in the program
        e.preventDefault(); //avoid page reloading whrn we press submit button and gives output in the same page
        // codition to login
            if (email == "admin@gmail.com" && password == 1234) {
             navigate('/admin')
            }
            else{
                alert("Invalid Credentials")
            }

        let data ={email,password}
        console.log({data});
      

    }
    return (
        <div className="adminlogin">
            <div className="form">
                <h1>Sign In Admin</h1>
                <div className="form_input1">
                   <form action="" onSubmit={handleLogin} > 
                   <div className="email">
                   <label htmlFor="">Email</label>
                   <br />
                   <input required type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" />
                   </div>
                   <div className="password">
                   <label htmlFor="">Password</label>
                   <br />
                   <input required type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter your Password" />
                </div>
                <button >Login</button>

                   </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;