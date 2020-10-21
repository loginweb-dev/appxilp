import React from "react";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";


  const Intro = ()=>{
    return (
      
        <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className="white-text text-center text-md-left mt-xl-5 mb-5">
                            <MDBAnimation type="fadeInLeft" delay=".3s">
                                <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                    Make purchases with our app
                                </h1>
                                <hr className="hr-light" />
                                <h6 className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                    molestiae iste.
                                </h6>
                                <MDBBtn color="white">Download</MDBBtn>
                                <MDBBtn outline color="white">Learn More</MDBBtn>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md="6" xl="5" className="mt-xl-5">
                            <MDBAnimation type="fadeInRight" delay=".3s">
                                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid"/>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBMask>
        </MDBView>
    );
  
}
export default Intro;