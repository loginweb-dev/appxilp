import React from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation
} from "mdbreact";


class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: {
                title: '',
                description: '',
                image: '',
                btn_name1: '',
                btn_link1: '',
                btn_name2: '',
                btn_link2: ''
            }
        };
        
        this.getIntro = this.getIntro.bind(this);
        this.getIntro();
    }

    getIntro = ()=>{
        axios.get('https://appxiapi.loginweb.dev/landingpage')
        .then(res =>{
            this.setState({
                intro:{
                    title: res.data.Header.Intro.title,
                    description: res.data.Header.Intro.description,
                    image: res.data.Header.Intro.image,
                    btn_name1: res.data.Header.Intro.btn_name1,
                    btn_name2: res.data.Header.Intro.btn_name2,
                    btn_link1: res.data.Header.Intro.btn_link1,
                    btn_link2: res.data.Header.Intro.btn_link2,

                } 
            })
        })
        .catch(error => {
            console.log(error)
        });
    }
    render() {
        return (
            <MDBView>
                <MDBMask className="d-flex justify-content-center align-items-center gradient">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6" className="white-text text-center text-md-left mt-xl-5 mb-5">
                                <MDBAnimation type="fadeInLeft" delay=".3s">
                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                        {this.state.intro.title}
                                </h1>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                    <ReactMarkdown source={this.state.intro.description}/>
                                </h6>
                                    <MDBBtn href={this.state.intro.btn_link1} target="_blank" color="white">{ this.state.intro.btn_name1 }</MDBBtn>
                                    <MDBBtn href={this.state.intro.btn_link2} target="_blank" outline color="white">{ this.state.intro.btn_name2 }</MDBBtn>
                                </MDBAnimation>
                            </MDBCol>
                            <MDBCol md="6" xl="5" className="mt-xl-5">
                                <MDBAnimation type="fadeInRight" delay=".3s">
                                    <img src={ 'https://appxiapi.loginweb.dev'+ this.state.intro.image.url  } alt="" className="img-fluid" />
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
            </MDBView>
        );

    }
}
export default Intro;