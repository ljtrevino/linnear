import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/Calc3/Calc31" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 11
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/OPNBF0uH9fGN6d2E-5IznTz2fdpKnPASVFLi_lxYKM391i_wb71HZRWycJiwKBWse-yzFRDxf4MwwWJPYRPxcjdu20v_q8Kxx-emWvMVklu4grCO5DoLJcvxiKj9dUNKEs_gJryeSw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/Calc3/Calc32" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 12
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Mw8ylDbY2goe0QnHxyfpD202NCqJoUEGdv39MMJmqwDSDUyv4fUkc9z9HvJ71HQjk34CExWSey6FFjBcSOboclGMYTQ6wpmaFO-JWXdBDcgRQguLSPgOYa-VAfYy0aJUZT7psicLvw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/Calc3/Calc33" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 13
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/yWvQnpDoDMHcHBdob7ptbU_vWc2WOnB3Q5KuHYOoI8gBiX_2uxFLCweAooXyeoF8ZCU9Onq8EQkSb18xIArRn_wDvryxX31g8_3pdft4YImO-JGbcvNOBsAgZ0M5im4u-_Ek2SUuzg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/Calc3/Calc34" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 14
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Iwc_oDu1q3Ty9wzxU37J7IVlg2YZBr4WvtypSJXtGhLClE3EmtyadOyTt50W1_oXE1cfVzj2MYY16ALwqvX1eD5e8Q16QcvgrZTrwzkrVqJDinANjnR2ajL-gYi6kXw5Ymwct2-YKg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/Calc3/Calc35" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 15
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/0caTf5GCoGDz6qwzOapIkfcFtCnoLUPT9pQLm-94riPOakklitay9Y-sFYDhALKx3XYBu7tgbePCNlBDPa3xRvFDW-RnzTb4lfQHQhaEutoNyYmyjGNM7MkUXumZlaekIPDnKq41Vg=w2400"/>
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
