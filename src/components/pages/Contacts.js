import React, { Component } from 'react'
 class Contacts extends Component {
    render() {
        return (
            <div>
                
                <section className="contact py-5">
 	            <div className="container py-lg-2 py-sm-1">
			<h2 className="heading text-capitalize text-center"> Get In Touch with us</h2>
			<div className="contact-grids mt-5">

				<div className="row">
					<div className="col-lg-6 col-md-6 contact-left-form px-5">
						<form action="#" className="text-center" style={{boxShadow:'5px 10px 20px 1px rgba(0,0,0,0.253)'}}>
                        <div className="row">&nbsp;</div>
							<div className=" form-group contact-forms p-2">
							  <input type="text" className="form-control" placeholder="Name" required="" />
							</div>
							<div className="form-group contact-forms p-2">
							  <input type="email" className="form-control" placeholder="Email" required="" />
							</div>
							<div className="form-group contact-forms p-2">
							  <input type="text" className="form-control" placeholder="Phone" required="" /> 
							</div>
							<div className="form-group contact-forms p-2">
							  <textarea className="form-control" placeholder="Message" rows="3" required=""></textarea>
							</div>
							<button className="btn btn-outline-dark" >Send</button>
                            <div className="row">&nbsp;</div>
						</form>
					</div>
					<div className="col-lg-6 col-md-6 contact-right pl-lg-5">
						<h4>Do you have any questions about us? write to us.</h4>
						<p className="mt-md-4 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<h5 className="mt-lg-5 mt-3">Office Hours</h5>
						<p className="mt-3">Monday to Friday : 09 am to 06 pm</p>
						<p>Saturday and Sunday : 10 am to 04 pm</p>
					</div>
				</div>
			</div>
	</div>
</section>
	
                <div className="row">&nbsp;</div>
                <section className="container-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.9056730973847!2d144.98879252921915!3d-37.822305798734426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642935b41c625%3A0x9095a24efa1a75ef!2s311%20State%20Route%2029%2C%20Richmond%20VIC%203121%2C%20Australia!5e0!3m2!1sen!2sin!4v1621496386155!5m2!1sen!2sin" width="100%" height="450" style={{border:'2rem'}} allowfullscreen="" loading="lazy"></iframe>
                </section>
                <div className="row">&nbsp;</div>

            </div>
        )
    }
}

export default Contacts;
