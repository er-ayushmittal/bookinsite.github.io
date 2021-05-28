import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import '../../form-style.css';
 function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand ms-5" to="/">
        <img src={logo} alt="logo" style={{ width:'35px' }}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
        <i className="fas fa-bars" style={{ color :'#fff'}}></i>
     
    </button>
    <div>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Book-Now</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div id="booking" className="section">
        <div className="row"> &nbsp;</div>
      <div className="section-center">
          <div className="container">
              <div className="row">
                  <div className="booking-form">
                      <div className="form-header">
                          <h1 style={{align:'center'}}>Make your reservation</h1>
                      </div>
                      <form>
                          <div className="form-group"> <input className="form-control" type="text" placeholder="Country, ZIP, city..." /> <span className="form-label">&nbsp;</span> </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group"> <input className="form-control" type="date" placeholder="Check-In" required /> <span className="form-label" >&nbsp;</span> </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group"> <input className="form-control" type="date" placeholder="Check-Out" required /> <span className="form-label" >&nbsp;</span> </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-4">
                                  <div className="form-group"> <select className="form-control" required>
                                          <option value="" selected hidden>Rooms</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                      </select> <span className="select-arrow"></span> <span class="form-label">Rooms</span> </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group"> <select className="form-control" required>
                                          <option value="" selected hidden>Adults</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                      </select> <span className="select-arrow"></span> <span className="form-label"></span> </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group"> <select className="form-control" required>
                                          <option value="" selected hidden>Kids</option>
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                      </select> <span className="select-arrow"></span> <span className="form-label"></span> </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group"> <input className="form-control" type="email" placeholder="Enter your Email"/> <span className="form-label">Email</span> </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group"> <input className="form-control" type="tel" placeholder="Enter you Phone"/> <span className="form-label">Phone</span> </div>
                              </div>
                          </div>
                          <div className="form-btn"> <button className="submit-btn">Book Now</button> </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>
    </div>
  </div>
</div>
        </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active ">
          <Link className="nav-link text-white text-uppercase ms-5" aria-current="page" to="/">Home<i className="fas fa-home px-2"></i></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Book A Stay<i className="fas fa-bed px-2"></i> </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ms-5" to="/services">Services<i class="fas fa-concierge-bell px-2"></i></Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 fa fa-search" type="search" placeholder="Search " aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
