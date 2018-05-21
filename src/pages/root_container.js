import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PageTransition from 'react-router-page-transition';
import { connect } from 'react-redux';

import If from './components/_if_component';
import AppHeader from './app_header';
import HomePage from './home_page';

injectTapEventPlugin();

function mapStateToProps(state) {
	return {
		page_details: state.page_details,
	};
}

class RootContainer extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" minHeight="100vh" className="RootContainer">
				<AppHeader />
                <PageTransition>{this.props.children || <HomePage/>}</PageTransition>
				<If condition={this.props.page_details.show_full_page_loader}>
					<div className="mui-col-xs-12 noPadding fullPageLoader">
						<div className="mui-col-xs-12 noPadding loader">
							<div style={{height: 50, width: 50, position: "fixed", top: "50%", left: "50%"}}>
								<div className=" react-spinner">
									<div className="react-spinner_bar" style={{animationDelay: "-1.2s", transform: "rotate(0deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-1.1s", transform: "rotate(30deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-1s", 	transform: "rotate(60deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.9s", transform: "rotate(90deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.8s", transform: "rotate(120deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.7s", transform: "rotate(150deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.6s", transform: "rotate(180deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.5s", transform: "rotate(210deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.4s", transform: "rotate(240deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.3s", transform: "rotate(270deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.2s", transform: "rotate(300deg) translate(146%)"}}></div>
									<div className="react-spinner_bar" style={{animationDelay: "-0.1s", transform: "rotate(330deg) translate(146%)"}}></div>
								</div>
							</div>
						</div>
					</div>
				</If>
			</Flexbox>
		);
	}
}

export default connect(mapStateToProps, null, null, { withRef: true })(RootContainer);
