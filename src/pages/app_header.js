import React, { Component } from 'react';
import { Link } from 'react-router';
import Flexbox from 'flexbox-react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import NavLink from './components/_navlinks.js';
import './css/app_header.less';

class AppHeader extends Component {

	render() {
		return (
			<Flexbox flexDirection="row" minWidth="100vw" className="AppHeader simple from-right transition-item">
				{/* <Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<NavLink className="logo" to="/">Logo</NavLink>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavDropdown eventKey={1} title="Page 1" id="dropdown1">
								<NavLink withLi to="/page1/a">A</NavLink>
								<NavLink withLi to="/page1/b">B</NavLink>
							</NavDropdown>
							<NavDropdown eventKey={2} title="Page 2" id="dropdown2">
								<NavLink withLi to="/page2/a">A</NavLink>
								<NavLink withLi to="/page2/b">B</NavLink>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar> */}
			</Flexbox>
		)
	}
}

export default AppHeader;
