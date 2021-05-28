import React, { Component } from 'react'
import img2 from '../../banner1.jpg';
import img1 from '../../banner2.jpg';
 class Services extends Component {
    render() {
        return (
            <div >
				 <img src={img2} alt="" width="100%" height="400px"></img>
                <section className="services pt-5" >
	<div className="container py-lg-5 py-sm-3"  style={{boxShadow:'5px 10px 20px 1px rgba(0,0,0,0.253)'}}>
		<h2 className="heading text-capitalize text-center mb-lg-5 mb-4"> Our Services</h2>
		<div className="row">
			<div className="col-lg-3 main-title-text ">
				<h3 className="my-lg-4 mb-4 bg-primary py-3 px-5" style={{color:'#fff'}}>The journey of a thousand miles begins with a single step.</h3>
				<img src={img1} alt="" className="img-fluid" />
			</div>
			<div className="col-lg-9 mt-lg-0 mt-5">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div className="ser-fashion-grid">
							<div className="about-icon mb-md-4 mb-3">
								<span className="fa fa-building fa-2x" style={{color:'#0275d8'}} aria-hidden="true"></span>
							</div>
							<div className="ser-sevice-grid">
							  <h4 className="pb-3">Accomodation</h4>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
							</div>
					  </div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div className="ser-fashion-grid">
							<div className="about-icon mb-md-4 mb-3">
								<span className="fa fa-free-code-camp fa-2x" style={{color:'#0275d8'}} aria-hidden="true"></span>
							</div>
							<div className="ser-sevice-grid">
								<h4 className="pb-3">Winter Tours</h4>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div className="ser-fashion-grid">
							<div className="about-icon mb-md-4 mb-3">
								<span className="fa fa-users fa-2x" style={{color:'#0275d8'}} aria-hidden="true"></span>
							</div>
							<div className="ser-sevice-grid">
								<h4 className="pb-3">Exp Agents</h4>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div className="ser-fashion-grid">
							<div className="about-icon mb-md-4 mb-3">
								<span className="fa fa-money fa-2x" style={{color:'#0275d8'}} aria-hidden="true"></span>
							</div>
							<div className="ser-sevice-grid">
								<h4 className="pb-3">Low Prices</h4>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
							</div>
					  </div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div className="ser-fashion-grid">
							<div className="about-icon mb-md-4 mb-3">
								<span className="fa fa-binoculars fa-2x" style={{color:'#0275d8'}} aria-hidden="true"></span>
							</div>
							<div className="ser-sevice-grid">
								<h4 className="pb-3">Easy Booking</h4>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div className="ser-fashion-grid">
							<div className="about-icon mb-md-4 mb-3">
								<span className="fa fa-camera fa-2x" style={{color:'#0275d8'}} aria-hidden="true"></span>
							</div>
							<div className="ser-sevice-grid">
								<h4 className="pb-3">Best Packages</h4>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
							</div>
					  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
            </div>
        )
    }
}

export default Services;
