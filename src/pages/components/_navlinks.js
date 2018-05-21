import React, { Component } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
	render() {
		let class_name = this.props.className ? this.props.className : "";
		class_name = this.props.active ? class_name + " active" : class_name + " inactive";
		if(this.props.withLi){
			return (
				<li className={class_name}>
					<Link to={this.props.to}>{this.props.children}</Link>
				</li>
			)
		} else {
			return (
				<Link to={this.props.to} className={class_name}>{this.props.children}</Link>
			)
		}

	};
};

export default NavLink;
