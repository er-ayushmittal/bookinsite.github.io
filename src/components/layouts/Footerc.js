import React from 'react';

 function Footerc() {
    return (
        <div>
            
        <footer className="text-center text-white" style={{backgroundColor:'#c0d2d8'}}>
         
          <div className="container p-4">
            
            
        
            
            <section className="">
              <form action="">
                
                <div className="row d-flex justify-content-center">
                  
                  <div className="col-auto">
                    <p className="justify-content-center text-dark">
                      Sign up for our Newsletter
                    </p>
                  </div>
                
                  <div className="col-md-5 col-12">
                    
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example2" className="form-control" placeholder="Email Address" />
                      
                    </div>
                  </div>
                  
                  <div className="col-auto">
                    
                    <button type="submit" className="btn btn-outline-dark mb-4">
                      Subscribe
                    </button>
                  </div>
                 
                </div>
                
              </form>
            </section>
          
        
            {/* <section className="mb-4">
             
             
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-facebook-f"></i>
              </a>
        
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i></a>
        
             
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i>
                </a>
        
              
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i></a>
            </section> */}
            <section className="table-hover">
           
              <div className="row justify-content-between">

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="row" >&nbsp;</div>
                  <h5 className="text-uppercase text-dark" style={{textAlign:'center'}}>Support 24*7</h5>
        
                  <ul className="list-unstyled mb-0" style={{textAlign:'center'}}>
                    <li
                     className="text-dark">Mail us at care@stay.com
                    </li>
                    <li
                     className="text-dark">Phone number : 0287-2498756
                    </li>
                    <li
                     className="text-dark">Address : xyz Street , Melbourne <br />
                     Australia
                    </li>
                    <li
                     className="text-dark">
                    </li>
                    
                  </ul>
                </div>
               
                
               
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="row" >&nbsp;</div>
                  <h5 className="text-uppercase text-dark">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-dark">About Us</a>
                    </li>
                    <li>
                      <a href="#!" className="text-dark">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/contactus" className="text-dark">Contact us</a>
                    </li>
                    <li>
                      <a href="#!" className="text-dark">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-dark" style={{textAlign:'center'}}>Follow Us Here</h5>
        
                  <ul className="list-unstyled mb-0" style={{textAlign:'center'}}>
                    <li>
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.facebook.com" role="button"
                ><i className="fab fa-facebook-f">&nbsp;Facebook&nbsp;</i>
              </a>
                    </li>
                    <li>
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com" role="button"
                ><i className="fab fa-instagram">&nbsp;Instagram</i></a>
                    </li>
                    <li>
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.twitter.com" role="button"
                ><i className="fab fa-twitter">&nbsp;&nbsp;Twitter&nbsp;&nbsp;&nbsp;</i></a>
                    </li>
                   
                  </ul>
                </div>
               
              
              </div>
             
            </section>
           
          </div>
         
          <div className="text-center p-3">
            <p className="text-dark">&copy;&nbsp;{new Date().getFullYear()}_________________ All Rights Reserved</p>
          </div>
          <a href="#" className="o-scroll-up static" title="back to top" style={{textDecoration:'none' , color:'black'}}>
            <div className="row">&nbsp;</div>
  <span className="o-scroll-up-text" style={{textAlign:'right'}}>Back to top</span>
  <span className="fas fa-arrow-up" aria-hidden="true"></span>
  <div className="row">&nbsp;</div>
</a>
        </footer>
        
                </div>
    );
}


export default Footerc;
