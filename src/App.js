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


import "./App.css";


import Login from './components/Login'; 
import Intro from './components/Intro';
import Feature from './components/Feature';
import Footer from './components/Footer';



class AppPage extends React.Component {
  state = {
    collapsed: false,
    islogin: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount(){
    console.log(window.sessionStorage.getItem('db_loginweb'))
    if (window.sessionStorage.getItem('db_loginweb')) {
      // console.log(window.sessionStorage.getItem('db_loginweb'));
      this.setState({
        islogin:true
      })
    } else {
      
    }
      
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
                 
                    {
                      !this.state.islogin &&
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
                      this.state.islogin &&
                      <MDBNavbarNav right>
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
                      
                    }
                    
                    
                  
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Intro/>
            </Route>
          </Switch>
        </Router>
        
     
        <MDBContainer>
           <Feature/>
        </MDBContainer>
        <Footer/>
      </div>
     
    );
  }
}

export default AppPage;
