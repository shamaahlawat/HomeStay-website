import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button } from "react-bootstrap";

import './css/home_page.less';

class HomePage extends Component {
    render() {
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 homePage white" >
                <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 noPadding col-xs-12 flexbox">
                    <div className="col-md-12 col-xs-12 homeStay" >
                        HomeStay
                      </div>
                    <div className="col-md-12 col-xs-12 text">
                        IT's FREE AND EASY
                          </div>
                    <div className="col-md-10 col-xs-12 noPadding property">
                        List your property on Homestays.in!
                        </div>
                    <Button bsStyle="primary"
                            onClick={() => browserHistory.push('/homestayinfo')}>
                        LIST YOUR PROPERTY NOW
                    </Button>
                    <div className="col-md-12 col-xs-12 moreUpdate" style={{ fontSize: "12px", fontWeight: "900" }}>
                        FOLLOW US FOR MORE UPDATES
                    </div>
                    <div className="col-md-12 col-xs-12 socialMedia" style={{ marginTop: "17px" }}>
                        <a href="https://www.instagram.com/explore/locations/352971020/b-star/" target="_blank"><img className="padding-10" src="../assets/images/facebook.svg" alt="not find" style={{ height: "3rem", marginRight: "2rem" }} /></a>
                        <a href="https://www.instagram.com/explore/locations/352971020/b-star/" target="_blank"><img className="padding-10" src="../assets/images/twitter.svg" alt="not find" style={{ height: "3rem", marginRight: "2rem" }} /></a>
                        <a href="https://www.instagram.com/explore/locations/352971020/b-star/" target="_blank"><img className="padding-10" src="../assets/images/instagram.svg" alt="not find" style={{ height: "3rem" }} /></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
