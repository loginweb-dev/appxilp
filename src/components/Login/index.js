
import React from 'react'
import axios from 'axios'
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
import { render } from '@testing-library/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./pages/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: "",
      password: ""
    }
    // this.postForm = this.postForm.bind(this);
    
  }

  async postForm(){
    // console.log('hola');
    // console.log(this.state.email, this.state.password);
    
    await axios.post('https://appxiapi.loginweb.dev/auth/local', {
      identifier: this.state.email,
      password: this.state.password

    })
    .then(function (response) {
      console.log(response.data.jwt);
      // alert(response.data.jwt)
      toast.info(response.data.jwt);
    })
    .catch(function (error) {
      // console.log(error);
      // console.log('mi error');
      toast.error("Error de credencial !");
      
    });
  
  }
  render(){
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
                    {/* <MDBInput
                      className="white-text"
                      iconClass="white-text"
                      label="Your name"
                      icon="user"
                    /> */}
                    <MDBInput
                      // className="black-text"
                      // iconClass="white-text"
                      label="Your email"
                      // icon="envelope"
                      onChange={e => this.setState({email: e.target.value})}
                      // value={this.state.email}

                    />
                    <MDBInput
                      // className="black-text"
                      // iconClass="white-text"
                      label="Your password"
                      // icon="lock"
                      type="password"
                      onChange={e => this.setState({password: e.target.value})}
                      // value={this.state.password}
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

export default Login



