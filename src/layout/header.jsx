import {Link} from 'react-router-dom'
import './header.css'
import { useEffect } from 'react';
function Header({userData,onLogout}){

    // useEffect(
    //   ()=>{
    //       /* providing access token in bearer */
    //       fetch('https://dummyjson.com/user/me', {
    //         method: 'GET',
    //         headers: {
    //         'Authorization': `Bearer ${}`, // Pass JWT via Authorization header
    //         },
    //         credentials: 'include' // Include cookies (e.g., accessToken) in the request
    //     })
    //     .then(res => res.json())
    //     .then(console.log);
  
    //   },[]
    // )



    return(
        <>
           <nav className="navbar navbar-expand-lg text-white bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="/src/assets/img/lgo.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
               
                    <Link to='/' className="text-white nav-link active"> Home</Link>
                </li>
                <li className="nav-item">
                <Link className="text-white nav-link" to='/products'> Products</Link>
                </li>
                
                <li className="nav-item">
                <Link className="text-white nav-link" to='/login'> login   {userData && userData.firstName}</Link>
                </li>
                <li className="nav-item">
                <div className="text-white nav-link" onClick={onLogout} > logout  </div>
                </li>
                <li className="nav-item dropdown">
                <a className="text-white nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="text-white nav-link" aria-disabled="true">
                    <i className='fa fa-search'></i>
                </a>
                </li>
                <li className="nav-item">
                <a className="text-white nav-link" aria-disabled="true">
                <i className="fa-solid fa-cart-shopping"></i>
                </a>
                </li>
                <li className="nav-item">
                <Link to='/signup' className="text-white nav-link" aria-disabled="true">
                    <i className='fa fa-user'></i>
                </Link>
                </li>
            </ul>
          
            </div>
        </div>
        </nav>
        </>

    )
}

export default Header;