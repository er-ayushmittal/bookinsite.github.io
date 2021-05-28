import React from 'react'
import styled from 'styled-components'
 function Footer() {
    return (
      <FooterContainer className="main-footer"> {/*nt included in bootstrap custom class*/}
      <div className="footer-middle">
      <div className="container">
      <div className="row">
      {/*column1*/}
      <div className="col-md-3 col-sm-6">
      <h4>loreum epmsum</h4>
      <ul className="list-unstyled">
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
      </ul>
      
      </div>
       {/*column2*/}
       <div className="col-md-3 col-sm-6">
      <h4>loreum epmsum</h4>
      <ul className="list-unstyled">
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
      </ul>
      
      </div>
       {/*column3*/}
       <div className="col-md-3 col-sm-6">
      <h4>loreum epmsum</h4>
      <ul className="list-unstyled">
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
      </ul>
      
      </div>
       {/*column4*/}
       <div className="col-md-3 col-sm-6">
      <h4>loreum epmsum</h4>
      <ul className="list-unstyled">
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
          <li>loerunnepsum</li>
      </ul>
      
      </div>
      </div> 
      {/* Footer boottom  */}
      <div className="footer-bottom">
      <p className="text-xs-center">
          &copy;{new Date().getFullYear} City Guide App -All Rights Reserved
      </p>    
      </div>
      </div>
      </div>
      </FooterContainer>
    );

}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark); 
}

`;