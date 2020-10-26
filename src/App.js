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
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBIcon
} from "mdbreact";

import { connect } from 'react-redux';
import Login from './components/Login';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';

import axios from 'axios';
import "./App.css";


class AppPage extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed: false,
      menu:{
        brand: "",
        link: "",
        link1: "",
        link2: ""
      }
    }
  }
  
  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    if (window.sessionStorage.getItem('db_loginweb')) {
      this.props.loginUser(JSON.parse(window.sessionStorage.getItem('db_loginweb')));

    } else {
      return {}
    }
  }
  logoutUser() {
    this.props.logoutUser();
    window.sessionStorage.removeItem('db_loginweb');
  }
  getNavbar = ()=>{
    axios.get('https://appxiapi.loginweb.dev/landingpage')
        .then(res =>{
            this.setState({
                menu:{
                  brand: res.data.Header.Navbar.brand,
                  link: res.data.Header.Navbar.link,
                  link1: res.data.Header.Navbar.link1,
                  link2: res.data.Header.Navbar.link2
                    
                } 
            })
        })
        .catch(error => {
            console.log(error)
        });
  }
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
                  <strong className="white-text">{  this.state.menu.brand}</strong>
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

                  {
                    !this.props.islogin &&
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="/login">
                          <MDBIcon icon="lock" className="mr-1" />Ingresar</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                          <MDBIcon icon="user-edit" className="mr-1" />Registrarse</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>

                  }
                  {
                    this.props.islogin &&
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user" className="mr-1" />Profile
                            </MDBDropdownToggle>
                          <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem href="#">My account</MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.logoutUser()} >Log out</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  }
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Intro />
            </Route>
            <Route path="/home">

            </Route>
          </Switch>
        </Router>
        <MDBContainer>
          <Feature />
          <Testimonial/>
          <Contact/>
        </MDBContainer>
        
        <Footer />
       
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    islogin: state.islogin,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({
      type: 'LOGIN_USER',
      payload: user
    }),
    logoutUser: () => dispatch({
      type: 'LOGOUT_USER',
      payload: {}
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppPage);
