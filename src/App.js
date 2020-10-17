import React from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBFooter,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "./components/FeaturesPage"
import "./index.css";
import FeaturesPage from "./components/FeaturesPage";


class AppPage extends React.Component {
 
  

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      banner:{
        title:"",
        description:"",
        image:""
      }
    };
    this.initialize = this.initialize.bind(this);


    this.initialize()
  }

  initialize = () => {
    axios.get('https://strapi.loginweb.dev/landing-page')
    .then(res => {
      console.log(res.data)
      this.setState({
        banner: {
          title: res.data.header[0].title,
          description: res.data.header[0].description
        }
      });
    })
    .catch(error => {
      console.log(error)
    });
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  


  //render
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
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    {this.state.banner.title}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                    {this.state.banner.description}
                    </h6>
                    <MDBBtn color="white">Download</MDBBtn>
                    <MDBBtn outline color="white">
                      Learn More
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <FeaturesPage/>
        </MDBContainer>
        <MDBFooter color="primary-color">
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </p>
        </MDBFooter>
      </div>

     
    );
    
  }

}

export default AppPage;