import React from "react";
// import ScrollAnimation from 'react-animate-on-scroll';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import {

  Card,
  CardFooter,
  CardBody,


} from "reactstrap";

import $ from "jquery"


export default class ServicesOffered extends React.Component{
    constructor(props){
        super(props); 
        this.state={ 
            ServicesOffered:{}
        }
    }
    componentWillMount(){ 
        this.setState({ServicesOffered:this.props.data},()=> {})
        
    } 

    

    render(){ 
        
        
        
    return (
      <>
        
        <div className="section menubg" >
        <Container id="Services">
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title textc" >Services Offered</h2>
            <h5 className="description">
            
            </h5>
            <br />
        </Col>
        </Row>
        
        <Row>
        <Col md="4">

            <Card
            className={$(window).width<100? " photo1" :"c3 add-animation info-img parallax photo1"} 
            data-background="image"
            style={{height:"initial"}}
            >
            <CardBody>
                <h6 className="card-category">Individual</h6>
                <div className="card-icon">
                <i className="nc-icon nc-chat-33" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
         
            
        </Col>
        <Col md="4">
            
        
            <Card
            className="c2 parallax photo2"
            data-background="image"
            style={{height:"initial"}}
            
            >
            <CardBody>
                <h6 className="card-category">Group Therapy</h6>
                <div className="card-icon">
                <i className="nc-icon nc-shop" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            
            </Card>
             
        </Col>
        <Col md="4">
        
            <Card
            data-background="image"
            className="c1 parallax photo3"
            style={{ height:"initial" }}
            >
            <CardBody>
                <h6 className="card-category">Faith Counseling</h6>
                <div className="card-icon">
                <i className="nc-icon nc-send" />
                </div>
                <p className="card-description">
                
                </p>
                <CardFooter>
                <Button
                    className="btn-neutral"
                    color="link"
                    
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-book mr-1" />
                    Show more
                </Button>
                </CardFooter>
            </CardBody>
            </Card>
            
        </Col>
        </Row>
    
        </Container>
        </div>

        </> 
    );
    }  
} 

