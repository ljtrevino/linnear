import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.036/CribMidterm" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/nr8cprTAGot2j8bvKJdOVAu_yquJMCwRNxr5Ul_DFNZw2PnNJmKJtL2yZBtHDtiFeF0FGUoTHKkqvS38JidMl2kv-LD6bmzWCogcT43fEs8bS8J3s6woK435ClBl-oWQUfDWaRYiPw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.036/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/BUUQuFgTzCD47d_rBZeA8makxugVOjy0s-qSansmPzzF8heJhnHO__mEgcv23jXUjIGKGnjff9-IbuzRjQ32kn75wAmBsXf4lHeEzFDNf8C1VNIzaBtF0l0PwHVbyaDHW06nc0oHHQ=w2400"/>
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
