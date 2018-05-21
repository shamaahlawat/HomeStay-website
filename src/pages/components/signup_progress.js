import React, {Component} from 'react';
import { browserHistory } from 'react-router';


export default class SignupProgress extends Component {

    goToStep = (step) => {
        switch (step){
            case 1:
                browserHistory.push('/homestayinfo');
                break;
            case 2:
                browserHistory.push('/emailVerification');
                break;
            case 3:
                browserHistory.push('/additionalInfo');
                break;
            case 4:
                browserHistory.push('/ownerVerification')
                break;
        }
    };

    render() {
        return (
            <div className="col-md-12 noPadding">
                <div className="col-xs-8 col-xs-offset-2 noPadding">
                    <div className="col-xs-4 noPadding border" style={{borderColor: this.props.step > 2 ? "#8f75be": "#ffc80a" }}></div>
                    <div className="col-xs-4 noPadding border" style={{borderColor: this.props.step > 3 ? "#8f75be": "#ffc80a" }}></div>
                    <div className="col-xs-4 noPadding border" style={{borderColor: this.props.step > 4 ? "#8f75be": "#ffc80a" }}></div>
                </div>
                <div className="col-xs-12 flex-box">
                    <div className="flex" style={{ marginLeft: "17px" }} onClick={() => this.goToStep(1)}>
                        <div className="circle" style={{background: this.props.step > 1 ? "#8f75be": "#ffc80a" }}> 1 </div>
                        <div className="text paddingTop-7 color" style={{color: this.props.step > 1 ? "black": "" }}>HOMESTAY INFO </div>
                    </div>
                    <div className="flex" onClick={() => this.goToStep(2)}>
                        <div className="circle" style={{background: this.props.step > 2 ? "#8f75be": "#ffc80a" }}> 2 </div>
                        <div className="text paddingTop-7 color" style={{color: this.props.step > 2 ? "black": "" }}>EMAIL VERIFICATION</div>
                    </div>
                    <div className="flex"onClick={() => this.goToStep(3)} >
                        <div className="circle" style={{background: this.props.step > 3 ? "#8f75be": "#ffc80a" }}> 3 </div>
                        <div className="text paddingTop-7 color" style={{color: this.props.step > 3 ? "black": "" }}>ADDITIONAL INFO </div>
                    </div>
                    <div className="flex" onClick={() => this.goToStep(4)}>
                        <div className="circle" style={{background: this.props.step > 4 ? "#8f75be": "#ffc80a" }}> 4 </div>
                        <div className="text paddingTop-7 color" style={{color: this.props.step > 4 ? "black": "" }}>OWNER VERIFICATION</div>
                    </div>
                </div>
            </div>
        )
    }
};