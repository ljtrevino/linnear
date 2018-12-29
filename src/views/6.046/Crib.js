import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.046/CribQuiz1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/0oDe5X8rwvI86alO4T_M8oUpAyj4so6MqxyMbArzgZQIyRLc-8Xu_wAogCFxeJGHfF7JfRFvUNChYAs9Sg173IL8SA_tgsvQwrs24g6lRtnoH_expyOhE-IRTtruTCTgAziXPqDk7g=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.046/CribQuiz2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/sYU8LxxLLd9HaKsPZysMCAEaRs8JEnKIVdnQBEIEO7gv7ulRu1MiDm6IVFZgIHee21Z1_lizgLFjMxr3QR01HEBj0uyDY4c11etpckc-DG4Yqse6994o2mjskj5U-9rVoWlKIObJuA=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.046/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/seunv6YBqGel_P31TJhjjeIe4rVFiH-c48mbMIFf-aVb3ASo1tegyuGetQhAXMKYQeVBiDmebFR6yVggmUxBDmJNc3TC593ErwlhwNPVUIyT4Q1iS4UN6ms5XJsAWQX4em3hSiRQFw=w2400"/>
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
