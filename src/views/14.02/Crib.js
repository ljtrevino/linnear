import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/14.02/Crib1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/dHa1l5aRSs6-7XWy37OeTDxxczK3h6Fd8XOGJYWILW1jGXT_AMFoymZVvJ7CAnp5jrO-rb9fuM_c3K7BjEKAOxp56lPLtZbta_tgW5k6ze8yquXD4OoV5QqTVVnFuTybm_USFPdtOw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/14.02/Crib2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/ukNIoSinre8_YQFQsBC2XaJCL7i-rIQkkzH2Mf7f3PP1fC4n-JnJh1TTfGdOD_Ilm2CHShr311rLN87m0s-V-hxlYfOIoq_oEQls5IB4QX13Q2_RTHrP00I4EmIBuIZKJHgkP4BNXA=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/14.02/Crib3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 3 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/sxsWs8Tr-1aEvgiUfoaydRnYEpUn3sA-UmvhcgUerlVUBtrrUIYVdX_fLm7gHy4ucXEMd8iv1CIClJ9h5l6TAykq7xNli-FaKZzThKObXgbIzaG4rVrBYkQVEIYFM30PET5T1nxODQ=w2400"/>
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
