import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/APPhysicsC/APPhysicsC1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Mechanics
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/oLAg7P7SNyrin07dkVvIqa2kjWQOx0I7UmEFOeSkc5DQ28TwIZHYeu27ahVUduC7_LsdEenmrmnKiJ8x3fwfAI6fqpjyOr4BOmKAoMeMcBgQJt2vzCMWa0URgAQrjXMyLgyi5gSeyA=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APPhysicsC/APPhysicsC2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Electricity & Magnetism
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/ttDMOAk0itLsGDDv3vBeVTSSQBnTQvncUyEL6jqekpqglhS-Sc_oU5SjI-9Gsv5QyQd24tJvYNGYERRoZU6-T-PcADOVRHay0wYzFx0Ca2lvZs2bH7_dlMNBGGQ40MDjlmErkuJcog=w2400"/>
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
