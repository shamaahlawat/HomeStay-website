import React, { Component } from 'react';
import { Button, Radio } from "react-bootstrap";

import './css/home_stay_info.less';

import SignupProgress from './components/signup_progress';

class OwnerVerification2 extends Component {

    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 homestayinfo " >
                <div className="col-md-8 col-md-offset-2 col-xs-12 ">
                    <div className="col-md-12 col-xs-12 homeStay" style={{ color: "purple", padding: "23px" }}>
                        Home<span className="span">Stay</span>
                    </div>
                    <div className="col-md-10 col-md-offset-1 description" style={{ color: "#9fa3a7" }}>
                        Listing on Homestays.in means a spotlight on your rental.
                        Guests all over the world can see your property and book hassle-free.
                        You will meet enthusiastic travellers and share local stories, culture and experiences.
                    </div>
                    <SignupProgress step={4}/>

                    <form className="col-md-8 col-md-offset-2 col-xs-12 " style={{ marginTop: "20px", color: "black" }}>
                        <div className="col-md-12 col-xs-12 ">
                            <ul className="col-xs-12 ">
                                {/*<li className="">*/}
                                    {/*<p>How do you want to verify ownership?</p>*/}
                                    {/*<Radio className="radio" style={{ color: "#9fa3a7" }}>*/}
                                        {/*Manual Verification*/}
                                    {/*</Radio>*/}
                                    {/*<Radio style={{ color: "#9fa3a7" }} checked readOnly>*/}
                                        {/*SMS*/}
                                    {/*</Radio>*/}
                                {/*</li>*/}

                                <li>
                                    <p>Proof of Owership: </p>
                                    <div className="imageSection">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div className="col-md-10 col-md-offset-1 "> Please upload the proof of ownership of the store. Supported formats - JPEG, PNG, PDF, DOCX etc or <span style={{ color: "#8f75be" }}>Browse</span> here </div>
                                    </div>
                                </li>
                            </ul>

                            <Button bsStyle="primary">Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default OwnerVerification2;
