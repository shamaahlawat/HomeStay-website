import React, { Component } from 'react';
import { Button } from "react-bootstrap";

import './css/home_stay_info.less';

import SignupProgress from './components/signup_progress';

class OwnerVerification3 extends Component {
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

                            <p className="">Enter the verification code you recieved on  <span style={{ color: "#8f75be" }}>+91 8000743414</span></p>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <input type="text" name="code" className="form-control marginBottom-12" placeholder="Enter Code" style={{ width: "30%", textAlign: "center", margin: "23px" }}></input>
                            </div>
                            <p>Hadn't recieved code yet?   </p>
                            <p><span style={{ color: "#8f75be" }} >Resent</span> email or <span style={{ color: "#8f75be" }} >Change Mobile Number</span> here</p>
                            <Button bsStyle="primary">Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default OwnerVerification3;
