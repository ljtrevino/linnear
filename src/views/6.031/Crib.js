import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.031/CribQuiz1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/pg8OwY1FFU_YW5ts-o_ODzxI3wrtTWiDt4HD_QYcGv3tftVNB-H_lCF1qdzCu4WzElilwqqdwm0xQudDZMdcICVtZf_PwhVsp4Hxgl-P3w6pbixJtQ6lNHcKzQVNJxHomPWngejURg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.031/CribQuiz2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/_nnIBSjhQeh9-UeZh8h5tmFUKFehRXKMCp7e0drlWFjonrx7R0WJIKaAGag6xc1ft63EyR2VTB_OUZzd4gEUgOviBtpO22e3AXE4ike_bDMjEytY5BxuBDzCVpJVDPRk1Ohg2w48Bw=w2400"/>
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
