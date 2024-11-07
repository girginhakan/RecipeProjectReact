import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../assets/style/login.scss'

const LoginPage = () => {
    const[user,setUser] = useState("");
    const[password,setPassword]=useState("");
    const {login}=useContext(AuthContext);
    const navigate =useNavigate();
    const handleLogin =async (e)=>{
        e.preventDefault();
        try {
            await login(user,password);
            navigate("/")
        } catch (error) {
            alert("OOOppps! Giriş işlem başarısız oldu.");
            setUser("");
            setPassword("");
        }
    }
  return (
    <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input  value={user} onChange={e=>setUser(e.target.value)} type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre:</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="text" id="password" name="password" />
        </div>
         <input className='login-button' type="submit" value={"Login"} />
      </form>
      <Link className='guest-button' to="/">Ziyaretçi olarak siteye girmek için tıklayınız</Link>
    </div>
  </div>
  )
}
export default LoginPage