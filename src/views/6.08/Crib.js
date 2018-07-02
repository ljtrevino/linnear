import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/CribMidterm" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/n8Lb5vWZxksuPbxoDZjPgPLtD5TryDYDaNKBX9Ah65lm0xUMnO5lpu9oIt8bsOewZQpy3xHFjfdx5oaZCJlvKMaquLZkiTNePAdqQC-XJMVfe9LLmBeqU0SJVUF4zlf-oN0nZsM_Kg=w2400"/>
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
