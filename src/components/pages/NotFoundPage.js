import React, { Component } from 'react'

 class NotFoundPage extends Component {
    render() {
        return (
            <div className="text-center p-5">
                <h1>
                    Ops! 404 Not Found
                </h1>
                <div>
                    <h4 className="text-muted">
                        Requested Page Doesnot Exist
                    </h4>
                    
                </div >
                <div className="row">&nbsp;</div>
                <a className="btn btn-outline-primary p-2" href="/" > Back To Home &nbsp; <i className="fa fa-home"/>

                </a>&nbsp;&nbsp;&nbsp;
                <a className="btn btn-outline-secondary p-2" href="/contactus" > Contact Us &nbsp; <i className="fa fa-phone"/>

                </a>
            </div> 
        )
    }
}

export default NotFoundPage;
