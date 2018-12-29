import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card style={{height: 80 + "vh"}} className="card-accent-primary">
              <CardHeader>
                Lecture 18 - Approximation Algorithms
              </CardHeader>
              <CardBlock className="card-body">
                 <embed style={{height: 70 + "vh"}} width="100%" src="https://drive.google.com/file/d/1Ec2eZDX6ui3l826FDgPShdOlTvh4Uohk/preview"></embed>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Cards;
