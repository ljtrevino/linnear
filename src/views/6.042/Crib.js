import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Crib1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/4VwNDsUtM17Nmsqlx8-0rlXW3cp1y2T3LCSmLfBuBLsZzrTIYdKAAI8Ng-R2tFrziPPojRcP4Z8hyyhLZpY_uWUiM3BTrM6kMPdVNL73tjLzHVA_ghCDMszsJXcy-df8pypuMlZ89A=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Crib2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/K3ycKYG4jlmnXhuLcshft4MNcFj4hFZeq5XtbmtIVSgxD_2xa_eMr-FRQ8eM1at1HTtdMwfEGwJWOhb9HlAN1X7JeY9gxAzt0F4MY0wtTvRlzKlHQVknfolmN7kVNFzRuKx7RWv4Bw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Crib3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 3 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/GBO6ygtxMJoU4-aSkzT7oB3DBhHTJnJXjvGJCpskZNNacndVnbmEgDBcokjrQnc5UoxleP68ZA8oa2JHjH3U8piMehEyNdkx_rJ-5mojihS-ETp6R3o2Yb2G6e8Oj0L5ozCQmrunQw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Crib4" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm 4 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/wC1yeJxAn3c-Vl4JYZL_HumUAxdzsSbXAHFAwNGWudO9mHkXW312NO4JQoLOqw3qfpMtXcqSk6nnhJoFo8I0b6WXyoj8WCPRnQJO7PhmGc7L2OVHTBzAT0bDfVZ_RilKjfJW4wjQxg=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/WIxdzShqgPqN2Cj4klMp4KmIPTXnjpnMh2eCjr4XRqZcundwYTwo-L1fEKsDri52YI8zUtPhlVBzumx80wItRwFwtAXTnI3gK-fEfL3CzDLjHFANNukdDtEr5I20kcv-ilkikpIB5g=w2400"/>
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
