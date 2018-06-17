import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/APEcon/Micro" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Microeconomics Review Guide
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/7GY9415HjvUT6PCRY0bXyPJ4U0Wwv2s5BMr5ybCvEIB9kv70qQh-1BDZikjhbXQ1BYoUBGkNdgXh_ZfjwKbrEYV74dqRkfRDQ464LsAkZRDeTLB2D7tHU276jM9eD4SPP4_50oyhqm3i_wVQdz6x36l8p1rCinDldUFEq6bR_8bCcEBx_wEZQSxMbsSSQiqKUtQY1ss2UCsHtLULUtNg4tG2ndp8JwIZb58pR3pf49G81xboKWA2aKhAdb3YMBzE91SEk9Go6Q_BhKMLH-d1g6FJmNwly-7wQt0Tg_h3fK0bfBcOkLbTseNKrSqjTmf_H7yr0wCpSv7XYjPocXjFZx6qPIarS-EU2DWN7Dqxa290jgIs82tO3XE5-Z7MJibCy0vm-I_5Gznb7YpSXIwy8ds6KI68ByfLuAbZ5NnaPr557i-LQsyYFGyrHiIsjR-UiCb_DjvChBiuOmXAdPi5DfLZo83Ym2shribMJwwfJOgjO4bjK21gpmDgYbru4981yXz82H2GiBRFiYJaRvk2qfK3pGzIxjQOk37HBSVJM0p17vHHguyID4XZlenRUi4j9ZQpD98wSLxd_rYGPaKYUM7H61cJwR3Xfi8oDNo=w1315-h1700-no"/>
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
