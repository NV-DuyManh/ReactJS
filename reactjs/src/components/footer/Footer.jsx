import React from 'react';

function Footer(props) {
    return (
        <div className="bg-dark text-white p-5 mt-5">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 ">
                    <div className="col mb-4">
                        <h5 className="fw-bold mb-3">About</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-secondary">Our story</li>
                            <li className="mb-2 text-secondary">Awards</li>
                            <li className="mb-2 text-secondary">Our Team</li>
                            <li className="mb-2 text-secondary">Career</li>
                        </ul>
                    </div>
                    <div className="col mb-4">
                        <h5 className="fw-bold mb-3">About</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-secondary">Our story</li>
                            <li className="mb-2 text-secondary">Awards</li>
                            <li className="mb-2 text-secondary">Our Team</li>
                            <li className="mb-2 text-secondary">Career</li>
                        </ul>
                    </div>
                    <div className="col mb-4">
                        <h5 className="fw-bold mb-3">Company</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-secondary">Our services</li>
                            <li className="mb-2 text-secondary">Clients</li>
                            <li className="mb-2 text-secondary">Contact</li>
                            <li className="mb-2 text-secondary">Press</li>
                        </ul>
                    </div>

                    <div className="col mb-4">
                        <h5 className="fw-bold mb-3">Resources</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-secondary">Blog</li>
                            <li className="mb-2 text-secondary">Newsletter</li>
                            <li className="mb-2 text-secondary">Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="col mb-4">
                        <h5 className="fw-bold mb-3">Subscribe</h5>
                        <div className="input-group mb-2">
                            <input type="email" className="form-control rounded-0 p-2 " placeholder="Enter email address" />
                            <button className="btn btn-primary rounded-0 px-4 " type="button">Subscribe</button>
                        </div>
                        <p className="text-secondary">Get digital marketing updates in your mailbox</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;