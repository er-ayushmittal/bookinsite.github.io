import React, { Component } from 'react'
import img1 from '../../banner2.jpg';
class booktour extends Component {
    render() {
        return (
            <div>
                
                    <img src={img1} alt="" width="100%" height="400px"></img>
                
                <section className="contact py-5">
	<div className="container py-lg-5 py-sm-4">
		<h2 className="heading text-capitalize text-center mb-lg-5 mb-4"> Book Your Tour</h2>
		<div className="contact-grids">
			<div className="row">
				<div className="col-lg-7 contact-left-form px-5" style={{boxShadow:'5px 10px 20px 1px rgba(0,0,0,0.253)'}} >
					<form action="#" className="row text-center">
						<div className="col-sm-6 form-group contact-forms p-2">
						  <input type="text" className="form-control" placeholder="Name" required="" style={{padding:'12px 20px'}}/>
						</div>
						<div className="col-sm-6 form-group contact-forms p-2">
						  <input type="email" className="form-control" placeholder="Email" required="" style={{padding:'12px 20px'}} />
						</div>
						<div className="col-sm-6 form-group contact-forms p-2">
						  <input type="text" className="form-control" placeholder="Phone" required="" style={{padding:'12px 20px'}} /> 
						</div>
						<div className="col-sm-6 form-group contact-forms p-2">
						  <input type="text" className="form-control" placeholder="Date" required="" style={{padding:'12px 20px'}} /> 
						</div>
						<div className="col-sm-6 form-group contact-forms p-2">
							<select className="form-control" id="adults" style={{padding:'12px 20px'}}>
								<option>Adults</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5 or more</option>
							</select>
						</div>
						<div className="col-sm-6 form-group contact-forms p-2">
							<select className="form-control" id="kids" style={{padding:'12px 20px'}}>
								<option>Kids</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5 or more</option>
							</select>
						</div>
						<div className="col-md-12 form-group contact-forms p-2" style={{padding:'12px 20px'}}>
						  <textarea className="form-control" placeholder="Message" rows="3" required=""></textarea>
						</div>
						<div className="col-md-12 booking-button">
                        <div className="row">&nbsp;</div>
                        <button className="btn btn-outline-dark" >Book now</button>
                        <div className="row">&nbsp;</div>
						</div>
					</form>
				</div>
				<div className="col-lg-5 contact-right pl-lg-5 px-5">
				
					<div className="image-tour position-relative">
						<img src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-fluid" />
						
					</div>
					
					<h4 className="text-center">Tour Description</h4>
					<p className="mt-3">Duis nisi sapien, elementum finibus ferme ntum ed eget, aliquet et leo. Mauris hendrerit vel ex.
					vitae luctus massa. Phas ellus sed aliquam leo et dolor. Vestibulum ullamcorper massa eut sed fringilla.</p>
					
				</div>
			</div>
		</div>
	</div>
</section>
            </div>
        )
    }
}
export default booktour;