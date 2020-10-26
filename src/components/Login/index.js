
import React from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./pages/login.css";

import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: "jaiko92.rm@gmail.com",
      password: "Password"
    }
    // this.postForm = this.postForm.bind(this);
    
  }

  componentDidMount(){
    console.log(this.props.user, this.props.islogin)
  }
  
  async postForm(){
      await axios.post('https://appxiapi.loginweb.dev/auth/local', {
      identifier: this.state.email,
      password: this.state.password

    })
    .then(response => {
      //toast.info(response.data.jwt);
      window.sessionStorage.setItem("db_loginweb", JSON.stringify(response.data.user));
      this.props.loginUser(response.data.user);
    })
    .catch(error => {
      toast.error(error);
      
    });
  
  }
  render(){
    if (this.props.islogin) {
      return <Redirect to="/home"/>
    
    }
    return (
      <div id="classicformpage">
        
        <ToastContainer />
      <MDBView>
      <MDBMask className="d-flex justify-content-center align-items-center gradient">
        <MDBContainer>
          <MDBRow>
            <MDBAnimation
              type="fadeInLeft"
              delay=".3s"
              className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
            >
              <h1 className="h1-responsive font-weight-bold">
                Sign up right now!
              </h1>
              <hr className="hr-light" />
              <h6 className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                molestiae, quisquam iste, maiores. Nulla.
              </h6>
              <MDBBtn outline color="white">
                Learn More
              </MDBBtn>
            </MDBAnimation>
  
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <MDBCard id="classic-card">
                  <MDBCardBody className="stylish-text">
                    <h3 className="text-center">
                      <MDBIcon icon="user" /> Login:
                    </h3>
                    <hr className="hr-light" />
                    <MDBInput
                      // className="black-text"
                      // iconClass="white-text"
                      label="Your email"
                      // icon="envelope"
                      onChange={e => this.setState({email: e.target.value})}
                      value={this.state.email}

                    />
                    <MDBInput
                      // className="black-text"
                      // iconClass="white-text"
                      label="Your password"
                      // icon="lock"
                      type="password"
                      onChange={e => this.setState({password: e.target.value})}
                      value={this.state.password}
                    />
                    <div className="text-center mt-4 black-text">
                      <MDBBtn onClick={() =>this.postForm()} color="indigo">Login</MDBBtn>
                      <hr className="hr" />
                      <div className="text-center d-flex justify-content-center ">
                        
                         <MDBBtn social="fb">
                          <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
                          </MDBBtn>
                          <MDBBtn social="gplus">
                        <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google +
                          </MDBBtn>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </MDBView>
    </div>
    )
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
      loginUser : (user) => dispatch({
          type: 'LOGIN_USER',
          payload: user
      })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);



