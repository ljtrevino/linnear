import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/APEcon/Micro" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Microeconomics Review Guide
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/MUYlKIeiUAThhBblHaELSj5UdrktCMstAl9cXflIIETDBxx1iBvil0UsQJhi4PQmOEVupBgpItJ1OMLDs8N1A7sUXz2hu2sBJh_2sRmcqj2wl2L6jW7wJsfGSSWV1Hw9PGEUtgKilA=w2400"/>
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
