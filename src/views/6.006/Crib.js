import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.006/CribQuiz1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/DYJK05fgSB230KfrAofQsuP_5SchVz_q0iVOSxss0cRFGP-WzAH6QR29UE7c6Twh1kPOyqzaqIxcb4J_GHMa1CFQ9PmIJ-7vzlMow2vdbI4srIadVDJSR7MfLfmop-MkOlQsEjk17Q=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.006/CribQuiz2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/xAnTfQjgq1Hmi0EUEQa1b8OIGFkJ656bQI_F32LNYA2DoyOZDJng7Va-a-KcQ4XZgeysu1pKDozM-vJUxArff_QisLQXWm0NbzdOJ5d4_LYL0k4N6D_2AP-mL_8osakgbg4t6Fu-aQ=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.006/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/DYJK05fgSB230KfrAofQsuP_5SchVz_q0iVOSxss0cRFGP-WzAH6QR29UE7c6Twh1kPOyqzaqIxcb4J_GHMa1CFQ9PmIJ-7vzlMow2vdbI4srIadVDJSR7MfLfmop-MkOlQsEjk17Q=w2400"/>
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
