import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/21M.011/CribExam1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Listening Quiz 1 Study Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/0ujUppYjjg6JMRRbT4JXGrFCldu2v3r_kxFzT5Q2I_MSUJfoT8h9O1FwecIB29_DDBW81F67ZIIjISkxwu8sCCOyc9alryb-D215rtJALO-PCZId6muYr3h321Hizp6DatyPXLkW7A=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/21M.011/CribExam2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Listening Quiz 2 Study Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/0_VtI39TuTwHTD8DKB58PC-DG229ML0OGO1Vm91_4Vzt6lwMVka8OMbd5BTWrGtlVbJ-CeDKdev3qWxnRU6yOei3OOqmO-eeRUvlaW_SjQ-uDMIotSX9OGXT4r_1FGyGV9qAt06j0A=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/21M.011/CribExam3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Listening Quiz 3 Study Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/vMQT9ErC5ax0bN7czM4IQhbIikULMR6E9PMoeaIYS-VIDFtt4aCgZykzxxpvzX1Qpvrfu-CfL8ZjfxWKgZ-fFzO5rmk-8KcS84nWWW75wBzR5tAahVCxij5N3Rj8iMYwxt1iRGWKag=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/21M.011/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Listening Quiz 4 Study Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/-Y0l8j_RR2uFzsk5XMZsV-Mk8YbdXslp-nI3seGaxwM-uHBkQ1ui55eIDXUXWy9SUwxl1i74968rpbakDP1_4Gyvg5EM3NR8xtn7qaENwLrMDs5vqPrC2zzoyW5zA3V5shPv42X9Bg=w2400"/>
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
