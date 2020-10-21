import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBDropdown, MDBIcon
} from "mdbreact";

//import asset
import "./App.css";

//import component 
import Intro from './components/Intro';
import Login from './components/Login';
import Feature from './components/Feature';
import Footer from './components/Footer';



class AppPage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            //Navbar 
            //-------------
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Link1</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink className="waves-effect waves-light" to="/login">
                        <MDBIcon icon="lock" className="mr-1" />Ingresar</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon icon="user-edit" className="mr-1" />Registrarse</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <MDBIcon icon="user" className="mr-1" />Profile
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                          <MDBDropdownItem href="#">My account</MDBDropdownItem>
                          <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
          //route-react
          //------------
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Intro/>
            </Route>
          </Switch>
        </Router>
        
        //sections
        //-----------------
        <MDBContainer>
           <Feature/>
        </MDBContainer>
        <Footer/>
      </div>
     
    );
  }
}

export default AppPage;
