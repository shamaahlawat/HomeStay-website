import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';

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


class HomeStayInfo extends Component {

    handleInputChange = (event, value) => {
        this.props.actions.updateStoreDetails({[event.target.name]: event.target.value});
    };

    selectLocation = (place) => {
        var data = {};
        place.address_components.forEach(function (address_component) {
            address_component.types.forEach(function (type) {
                data[type] = address_component.long_name;
            });
        });
        var location = {
            location_name: place.name,
            location: [place.geometry.location.lng(), place.geometry.location.lng()],
            formatted_address: place.formatted_address,
            address_1: "",
            address_2: "",
            city: data["locality"],
            state: data["administrative_area_level_1"],
            country: data["country"],
            zipcode: data["postal_code"],
            place_id: place.place_id,
            google_id: place.id
        };
        this.props.actions.updateStoreDetails(location);
    };

    nextPage = () => {
        browserHistory.push('/emailVerification');
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

                    <SignupProgress step={1}/>

                    <form className="col-md-8 col-md-offset-2 col-xs-12 " style={{ marginTop: "20px", color: "black" }}>
                        <div className="col-md-12 col-xs-12 ">
                            <ul className="col-xs-12 ">
                                <li>
                                    <p>Homestay Name</p>
                                    <input type="text" name="name" className="form-control marginBottom-12 " placeholder="Give your homestay name"
                                           value={this.props.store_details.name}
                                           onChange={this.handleInputChange}/>
                                </li>

                                <li>
                                    <p>My Homestay is at</p>
                                    <Autocomplete
                                        className="form-control marginBottom-12 "
                                        onPlaceSelected={(place) => this.selectLocation(place)}/>
                                </li>

                                <li>
                                    <p>Country</p>
                                    <input type="text" name="country" className="form-control marginBottom-12 " placeholder="India"
                                           value={this.props.store_details.country}
                                           onChange={this.handleInputChange}/>
                                </li>

                                <li>
                                    <p>Address 1</p>
                                    <input type="text" name="address_1" className="form-control marginBottom-12 "
                                           placeholder="Nalsarovar Road,  Devdholera"
                                           value={this.props.store_details.address_1}
                                           onChange={this.handleInputChange}/>
                                </li>

                                <li>
                                    <p>Address 2</p>
                                    <input type="text" name="address_2" className="form-control marginBottom-12 "
                                           placeholder=",  Gujarat 382240,  India"
                                           value={this.props.store_details.address_2}
                                           onChange={this.handleInputChange}/>
                                </li>

                                <li style={{ display: "flex" }}>
                                    <div className="marginBottom-12">
                                        <p>City</p>
                                        <input type="text" name="city" className="form-control" placeholder="Devdholera" style={{ width: "90%" }}
                                               value={this.props.store_details.city}
                                               onChange={this.handleInputChange}/>
                                    </div>
                                    <div>
                                        <p>State</p>
                                        <input type="text" name="state" className="form-control" placeholder="Gujarat" style={{ width: "90%" }}
                                               value={this.props.store_details.state}
                                               onChange={this.handleInputChange}/>
                                    </div>
                                    <div>
                                        <p>Zip Code</p>
                                        <input type="name" name="zipcode" className="form-control" placeholder="382240" style={{ width: "98%" }}
                                               value={this.props.store_details.zipcode}
                                               onChange={this.handleInputChange}/>
                                    </div>
                                </li>
                            </ul>
                            <Button bsStyle="primary"
                                    onClick={() => this.nextPage()}>Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HomeStayInfo);
