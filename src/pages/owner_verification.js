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

class OwnerVerification extends Component {

    handleInputChange = (event, value) => {
        this.props.actions.updateStoreDetails({[event.target.name]: event.target.value});
    };

    createStore = () => {
       this.props.actions.createStore(this.props.store_details);
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

                    <SignupProgress step={4} />

                    <form className="col-md-8 col-md-offset-2 col-xs-12 " style={{ marginTop: "20px", color: "black" }}>
                        <div className="col-md-12 col-xs-12 ">
                            <ul className="col-xs-12 ">
                                {/*<li className="">*/}
                                    {/*<p>How do you want to verify ownership?</p>*/}
                                    {/*<Radio className="radio" checked readOnly style={{ color: "#9fa3a7" }}>*/}
                                        {/*Manual Verification*/}
                                    {/*</Radio>*/}
                                    {/*<Radio style={{ color: "#9fa3a7" }}>*/}
                                        {/*SMS*/}
                                    {/*</Radio>*/}
                                {/*</li>*/}


                                <li>
                                    <p>Phone Number</p>
                                    <input type="number" name="phone_number" className="form-control" placeholder="Enter 10 digit Mobile number"
                                           style={{ width: "90%" }}
                                           value={this.props.store_details.phone_number}
                                           onChange={this.handleInputChange}/>
                                </li>
                            </ul>

                            <Button bsStyle="primary" onClick={() => this.createStore()}>Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(OwnerVerification);

