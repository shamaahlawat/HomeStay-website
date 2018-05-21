import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { bindActionCreators } from 'redux';
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

class AdditionalInfo extends Component {

    handleInputChange = (event, value) => {
        if (event.target.files == null) {
            this.props.actions.updateStoreDetails({ [event.target.name]: event.target.value });
        }
    };

    uploadImage = event => {
        console.log(event.target.name);
        var data = {
            key: "image",
            value: event.target.files[0]
        };
        this.props.actions.uploadStoreImage(data, event.target.name);
    };

    nextPage = () => {
        browserHistory.push('/ownerVerification');
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

                    <SignupProgress step={3} />

                    <form className="col-md-10 col-md-offset-1 col-xs-12 " style={{ marginTop: "20px", color: "black" }}>
                        <div className="col-md-12 col-xs-12 ">
                            <ul className="col-xs-12 ">
                                <li>
                                    <div className="marginBottom-24">
                                        <p>Owner Name</p>
                                        <input type="name" name="owner_name" className="form-control" placeholder="Shama"
                                            value={this.props.store_details.owner_name}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </li>

                                <li>
                                    <p>Homestay Name</p>
                                    <input type="name" name="name" className="form-control marginBottom-24 " placeholder="Shama Villa"
                                        value={this.props.store_details.name}
                                        onChange={this.handleInputChange} />
                                </li>

                                <li className="marginBottom-24 " >
                                    <p>Profile Channel</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ marginTop: "13px", marginRight: "5px" }}>www.homestay.com/</p>
                                        <input type="name" name="channel_name" className="form-control" placeholder="Enter channel name" style={{ width: "77%" }}
                                            value={this.props.store_details.channel_name}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </li>

                                <li className="marginBottom-24 ">
                                    <p>Homestay Description</p>
                                    <textarea name="store_description" className="col-md-12 form-control marginBottom-24 " style={{ height: "auto" }}
                                        placeholder="List your vacation rental on Homestays.in and join a community of home owners & hosts and connect with guests worldwide.If you own a second home or a holiday home and want to rent it out get in touch with us pronto. Listing is absolutely free and simple!"
                                        value={this.props.store_details.store_description}
                                        onChange={this.handleInputChange} />
                                </li>

                                <li className="col-md-12 ">
                                    <p >Homestay Tagline</p>
                                    <input type="name" name="tagline" className="form-control marginBottom-24 " placeholder="Best Weekend Gateway Stay"
                                        value={this.props.store_details.tagline}
                                        onChange={this.handleInputChange} />
                                </li>

                                <li className="marginBottom-24 ">
                                    <p>Homestay Logo (200x200 for best results):</p>
                                    <div className="imageSection" style={{ display: "flex", alignItems: "center", height: "200px" }}>
                                        {this.props.store_details.image !== "" &&
                                            <div>
                                                <img
                                                    src={
                                                        this.props.store_details.image
                                                    }
                                                    alt="Profile_photo"
                                                    style={{ width: 150, height: 100 }}
                                                    className="Img-responsive setProfileImage"
                                                />
                                            </div>
                                        }
                                        <div className="inputImage" style={{
                                            display: "flex", flexDirection: "column",justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            {/* <i className="fa fa-plus"/> */}
                                            <img src="../assets/images/plus.svg" alt="upload image" style={{ height: "4rem", marginBottom: "20px" }} />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image"
                                                className="uploadFile"
                                                style={{ marginLeft: "30%" }}
                                                onChange={this.uploadImage}
                                            />
                                            <div className="col-md-12" style={{ marginTop: "5px" }}> Drag & Drop or <span style={{ color: "#8f75be" }}>Browse</span> here </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="marginBottom-24 ">
                                    <p>Homestay Cover Image (828x315 for best results):</p>
                                    <div className="imageSection" style={{ height: "315px"}}>
                                        {this.props.store_details.background_image !== "" &&
                                            <div>
                                                <img
                                                    src={
                                                        this.props.store_details.background_image
                                                    }
                                                    alt="Profile_photo"
                                                    style={{ width: 150, height: 100 }}
                                                    className="Img-responsive setProfileImage"
                                                />
                                            </div>
                                        }
                                        <div className="inputImage" style={{
                                            display: "flex", flexDirection: "column", justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <img src="../assets/images/plus.svg" alt="upload image" style={{ height: "4rem", marginBottom: "20px" }} />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="background_image"
                                                className="uploadFile"
                                                style={{ marginLeft: "30%", width: "100%", height: "100%" }}
                                                onChange={this.uploadImage}
                                            />
                                            <div className="col-md-12" style={{ marginTop: "5px" }}> Drag & Drop or <span style={{ color: "#8f75be" }}>Browse</span> here </div>
                                        </div>
                                    </div>
                                </li>

                                <li style={{ display: "flex" }}>
                                    <div className="marginBottom-24" style={{ width: "50%" }} >
                                        <p>Website Link</p>
                                        <input type="name" name="name" className="form-control" placeholder="Enter Website link" style={{ width: "96%" }} />
                                    </div>
                                    <div style={{ width: "50%" }} >
                                        <p>Facebook Profile Link</p>
                                        <input type="name" name="name" className="form-control" placeholder="Enter Facebook Profile link" />
                                    </div>
                                </li>

                                <li style={{ display: "flex" }}>
                                    <div className="marginBottom-24" style={{ width: "50%" }} >
                                        <p>Instagram Profile Link</p>
                                        <input type="name" name="name" className="form-control" placeholder="Enter Instagram Profile link" style={{ width: "96%" }} />
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <p>Twitter Profile Link</p>
                                        <input type="name" name="name" className="form-control" placeholder="Enter Twitter Profile link" />
                                    </div>
                                </li>
                            </ul>
                            <Button bsStyle="primary" onClick={() => this.nextPage()}>Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AdditionalInfo);
