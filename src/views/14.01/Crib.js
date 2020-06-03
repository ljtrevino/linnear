import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/14.01/CribExam1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Exam 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/n4anRkAYVF_d5QdO6fDEPQC0s2V2x26L0tMlo7Z_w1Z3K6DwQjvNxYqmZfISK9siG7XXhThwwdNRh-qetYrpj0aXabTTCDoWrUYqYMxFYqBLzlrU10pbypdnwgIii2RYOfR2uItHKQ=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/14.01/CribExam2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Exam 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/jbR8iTKFzn6XCcvY-in9R07AM94JCHKx3YvbSX4JIApv0jM2S6mqWctC5tQJ3XoQR4I6yYNhyZmlQjKEme8-WUS-if1jUV0bezA45Ze7LbJfaiOGv9-sUJIeYRQObldPBlR7Qzh1Zg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/14.01/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/mutCZh-KmnE3sG0nbOxrdkR7cdDCoHli8XmlGWIjXW-ZTR9JxwlS0T4SjYtCxLLHNmSizqBccOnF4Tkdi5XcxdXTXHUz0Bv22A4_emhdWyoUeMcnNeob3JXtrb8NLAQt9ybqs7SMAQ=w2400"/>
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
