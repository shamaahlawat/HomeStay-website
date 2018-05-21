import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import './css/home_stay_info.less';

function mapStateToProps(state) {
    return {
        store_details: state.store_details
    };
}

class CongratulationScreen extends Component {

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

                    <form className="col-md-11 col-md-offset-1 col-xs-12 " style={{ marginTop: "20px", color: "black" }}>
                        <div className="col-md-12 col-xs-12 ">
                            <div className="">
                                <img src="../assets/images/check.svg" alt="upload image" style={{ height: "7rem", marginBottom: "20px" }} />
                            </div>
                            <div className=" congrats " >
                                Congratulation!
                                </div>
                            <div className=" congrats " style={{ marginBottom: "50px" }}>
                                Your Homestay has been Created!
                                </div>
                            <p style={{ color: "#9fa3a7" }}>
                                If you find it difficult to visit your second home often or to maintain it, what better than to rent it out to guests who are seeking a getaway! This way you give travellers a chance to stay at homely abode while you make some extra money </p>

                            <a href={'https://poletalks.com/app/'+this.props.store_details.channel_name}>
                                <Button className="button " bsStyle="primary">TAKE ME HOME</Button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, null, null, { withRef: true })(CongratulationScreen);
