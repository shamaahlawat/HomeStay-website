import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import './css/home_stay_info.less';

import SignupProgress from './components/signup_progress';
import * as pageActions from '../redux/actions/page_actions';
import * as storeActions from '../redux/actions/store_actions';

function mapStateToProps(state) {
    return {
        page_details: state.page_details,
        store_details: state.store_details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions, storeActions), dispatch)
    };
}

class EmailVerification1 extends Component {

    handleInputChange = (event, value) => {
        this.props.actions.updateStoreDetails({[event.target.name]: event.target.value});
    };

    nextPage = () => {
        browserHistory.push('/additionalInfo');
    };

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

                    <SignupProgress step={2}/>

                    <form className="col-md-8 col-md-offset-2 col-xs-12 " style={{ marginTop: "20px", color: "black" }}>
                        <div className="col-md-12 col-xs-12 ">
                            <ul className="col-xs-12 ">
                                <li className=" ">
                                    <p>Email ID</p>
                                    <input type="email" name="email" className="form-control marginBottom-12 " placeholder="Email"
                                           value={this.props.store_details.email}
                                           onChange={this.handleInputChange}
                                    />
                                </li>
                            </ul>
                            <p>By clicking the button below, you represent that you have authority to claim this account on behalf of this business, and agree to Homestay’s
                                <span style={{ color: "#8f75be" }}>Terms of Service</span>and
                                <span style={{ color: "#8f75be" }}>Privacy Policy.</span></p>
                            <Button bsStyle="primary" onClick={() => this.nextPage()}>Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(EmailVerification1);