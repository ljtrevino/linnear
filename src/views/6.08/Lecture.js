import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/Lecture1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Lecture 1
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/MZGEbqipk6valD1RjhF5iUAvEUQBgTv5zxGa51Wz8yqUPStwzsHsNQHx_616lJK4qT_QTMdngLpZNIeOaxMz8qjT47D-1Wy37YjEix4TL2fqEfmvqUoR43Y40X9IvNqP9sfF3kl25w=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/Lecture2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Lecture 2
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/7Ceuqws4tvAFy_B2NM9v-guioVg5VDNGzt-tjvQ0uRIcGP43s8FNE_DdKH6Htb791ZJhMET2cZPwxVGU6y95_RETK96Ok0rfFUoyAKNfTWbL2g4QiUXYmJl6zFaX0Jn8x4h27Rat0w=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/Lecture3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Lecture 3
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/1X91WPSC6QLw4hfMCcCrz-chQ1ne4WzAFDoaPR6pYVRI1wavhkjgF7z6RDSPtQuo6EKB-9nl99RLpTkIql7weq6UTWeAAPFJCathFCupECNLAfAIuuLRnFtIt0oshyDNo4l_O8xkLQ=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/Lecture4" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Lecture 4
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/tF9nrVqR6NUSt_Nzd7BRPCejxBtiFBVQfJkC3qpt4ZejJpVHJjSHR7r_lTkUgZUw17uMLr2ubu7AWasiBvyEtactJUuJFANdwbchivf6lMOxeP0iJqxjCCAvFPOCkapjafCVENlkiQ=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/Lecture5" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Lecture 5
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/4J6q1-7-d3QiXsxipuZmhVcsPLHecxAp_I4kwguSYIHR-gY9rpcE2GW5113-Slyu-KLNqrDqyVJzv5HUSBMKj0nGfoiflDps9z6anTZEin-r4BuRoYBbaVYv0_OaIGGhkhw1ze4llw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/Lecture6" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Lecture 6
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Fy-a02ALC7isPVqnYacSKicbmWsiXwFSZjR5YTJltx4NFXKkCCRrWcHcqq7TNl-yCB9hyYIMskj6ONX0tw4sComUEzCyoPPDA3YP8_ANOwulNNL_z45G6bTC0fSFkPd4OTLmLjQO-A=w2400"/>
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
