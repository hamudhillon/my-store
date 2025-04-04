

import { BrowserRouter , Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'
import Header from './layout/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import SignUp from './pages/signup'
import Login from './pages/login'
import { useEffect, useState } from 'react'
function App() {
  const [userData,setUserData]=useState(null)

  useEffect(()=>{
    if(sessionStorage.getItem('user')){
      setUserData(JSON.parse(sessionStorage.getItem('user')))
    }

  },[])

  function loginData(data){
    fetch('https://dummyjson.com/user/me', {
      method: 'GET',
      headers: {
      'Authorization': `Bearer ${data}`, // Pass JWT via Authorization header
      },
      redirect: "follow",
      // credentials: 'include' // Include cookies (e.g., accessToken) in the request
  })
  .then(res => res.json())
  .then(userData=>setUserData(userData));
  
  }
  function handelLogout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    setUserData(null)
  }

  return (
   <BrowserRouter>
      <Header  userData={userData} onLogout={handelLogout}></Header>
      <Routes>
        <Route path="/" element={<Home userData={userData}/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login loginData={loginData} />} />
      </Routes>
    
   </BrowserRouter>
  )
}

export default App
