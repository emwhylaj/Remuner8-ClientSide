import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css"
import logo from "../../assets/img/brand/profile3.png"

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
      

    <div class="header header-1">    	
		<div class="navbar-main">
			<div class="container">
			    <nav id="navbar-main" class="navbar navbar-expand-lg">
			        <a class="navbar-brand" href="index.html">
						<img src={logo} alt="Remuner8" width="150" />
					</a>
			        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			            <span class="navbar-toggler-icon"></span>
			        </button>
			        <div class="collapse navbar-collapse" id="navbarNavDropdown">
			            <ul className="navbar-nav ml-auto">
                   
			               

                     <Link>
                       <li className="nav-item">
			                    <a className="nav-link" href="#about">sign In</a>
			                </li>
                     </Link>
			            
			             
			            </ul>
			            <a href="#talk" className="btn btn-primary btn-nav">Sign up</a>
			        </div>
			    </nav> 
			</div>
		</div>

    </div>


	<div id="home" class="section banner-full bgi-cover-center" data-background="../images/dummy-img-1920x900.jpg">
		<div class="container h-100 d-flex align-items-center">
			
        	<div class="wrap-caption">
               	{/* <p class="uk18">ALL YOU NEED IS HERE</p> */}
               	<h1 class="caption-headingcaption-heading" style={{color:'white',fontSize:'60px'}}>RENUMERA8 PAYROLL PORTAL</h1> 
               	{/* <p class="uk16">We provide high standard clean website for your business solutions sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p> */}
                <div class="spacer-30"></div>
            
            </div>  
				
        </div>
    </div>	

      </div>
    );
  }
}
