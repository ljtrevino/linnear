import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/3.091/CribExam1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Exam 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/lqS3xqMcvBgZHAEx8JD4QITxbm2Y7LdcuRe5PwZYcuqAKBt3iBh0k1zpRCkqTEpsp_1AO97vqBsY9zzwDBPJwUZ4M8ICh_g-oaokl89MOQXWCc-b4ek9iRzj3oF3s02ljULRNFDp2w=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/3.091/CribExam2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Exam 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/9klA8LzPLLfGSkhFGJFXDQatUuGs5a94uDWhsTkZqamT_5dvvDbDfA7wV14waAsHQOar8vYYI12JbiEAtz8dNFjop0e-NVayjB-MWNIRmwvnii3i_WUDfGlGlPAH5ffEoTAIbQll7w=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/3.091/CribExam3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Exam 3 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/VZB9DVsD5Tm87l3JlVrMJgP1VHyYTjJ3zb1W3spSyHhIUGWhmQwPUReVeHRUgdfOpp7TKUHPH4Sebg4082pMLfxjBFVuI-U08hM2qJHTkJGWLfPgkk4na2NFrQiRb3JaAUiwp96CVg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/3.091/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/NxsF2HmThG1s-f9sNWbRoyPTu5reXkzY3kiWZWAWh740WzKTB6tFTFXbvPX76gmr42KeXLf85YmDdD-I1ntL21Dem8FbjS5kPugerkkkoCVd3thZakMehD3fDUvKxeN1ojED9Zmpvw=w2400"/>
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
