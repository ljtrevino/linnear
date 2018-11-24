import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/Welcome" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Welcome
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/xd9E5ru1aAZyrWzwg6GnOjag29p6PEWDTdJUEewXF1mAiKajFSwWiouRLtr_VIEkja-A-U7EPXQEWykeZzEIo979V8ZBcjt4n6cU3e8LnFFHDoSobSo2x0FfuwyoG_QffbeAmv0QVg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/FAQ" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                FAQ
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/d3gv3VcB9tmc9lxqK093BxvY60WWf4C7GH1KGDH0DXL9xSxk3L_QInA_l8mCMLrc7II2OSddqhkU_KDyQiuYYKjlAiG0MhnRb3igeYfM0RNy4MAmJJWVNlI0QEaKpfI16RvKNdS2Ww=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="mailto: linnearylander@gmail.com" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Contact
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/CxJZ_XArJ_hEEIUoAfBYGQp2wI0-Ahdy-abpvFeHYM3NxqpkxvqwS7dr59W3kkyb_OsoiDtZH36ST_U0PxA9bLmvc-XOQI9xHxwtoefXf6OvpOquSKGiFWenzIjxQ49PbZ0t06TMGQ=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
      </div>

    )
  }
}

export default Cards;
