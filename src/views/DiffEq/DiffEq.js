import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/DiffEq/DiffEq1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Unit 1
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/10or9kOwdJjV5n_xzpomdhLCGxO_SqvyNzOXdwY3m5WbzTa7mZQyAFiwDcPeyl6ej7iV8N8ORwYcpJYnPKbKWoY0WNiVvFqHPYFKICXFsx7oeTqHL1KPPjP-ukN6bWuAkdNlIWT6RA=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/DiffEq/DiffEq2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Unit 2
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/5g2nzEGnP7qEBhENri_YRPuRfxy7qRhtx63DsmM5_y-aHaE9NiKDdj5yOVsVOU99CCjiXDUHOQIg18kVKqbM9_SA-OHPNJJHJtYYawNY3LwSKEiLgYu8qeHqohMmTdgGnkU6WLSGHQ=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/DiffEq/DiffEq3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Unit 3
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/ZBXXfH_6pd5fJcprdn2nDsZSK3t5MYRSOCQ3ItdusJ3lZCD89uUSSWLZjdMzgz4GWYXmXlUT2una54QbTZh8B6ymXcVr_bu4AWFn5r4_YwYW1yCzJoOHnBeZdDIMJDQHPYdHUQvIBw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/DiffEq/DiffEq4" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Unit 4
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/8ucng3gCnTqe6kgqSx4mGDpz-oeifCa4Vnue5Z6RyeYiYI3IQV7MsViGQpE7HOgeh0nLFPJserKwnT4aBNaFGRRUAp3ze60uIMw6TrGga4_wxIMdBtoUcSXf4ckvXP1Irbrg3hooSw=w2400"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/DiffEq/DiffEq5" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Unit 5
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/inOdPyiQWMGjTiZ9r6JjukT551SL1g8ixaR__ISPDSjtZyKE_IqDqG_rg01og1fDNFAMEaTJo0Mzs2qjoHKd8bapWIN70aNoBTY_0eD8aEJkyXYMNmdbzkO09CmB3j29OSqqqCyxgw=w2400"/>
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
