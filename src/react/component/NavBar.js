import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
     <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Farmer's Network</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                       
         
       <li class="nav-item">    <Link className="nav-link js-scroll-trigger" to='/'>Home</Link>
          </li>
       <li class="nav-item">    <Link className="nav-link js-scroll-trigger" to='/forum'>Forum</Link>
       </li>
       <li class="nav-item">    <Link class="nav-link js-scroll-trigger" to='/tv'>Farmer's TV</Link>
       </li>
       <li class="nav-item">    <Link class="nav-link js-scroll-trigger"to='/transport-list'>Transportlist</Link>
          </li>
         < li class="nav-item">    <Link class="nav-link js-scroll-trigger"to='/add-item'>Add</Link></ li>
         <li class="nav-item">    <Link class="nav-link js-scroll-trigger" to='/about'>About US</Link> </li>
         <li class="nav-item">    <Link class="nav-link js-scroll-trigger"to='/user'>Login</Link>
          </li>
       <li class="nav-item">    <Link class="nav-link js-scroll-trigger" to='/transport-api'>Transport api </Link>
          </li>
        
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  );
};

export default NavBar;
