import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.08/CribMidterm" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Midterm Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/jX4gxzV6WMSP-BgrMovNxRlx3TntXqK9zR5RZvIM9zqGkac2H5DV_Af-HK-hlc17EtK8A2HRwafvkDYxo-Zv6gEcL9RIosD9URQpS7r9ZPuHFlclo0LKb0xkTnVLCngLflM47NW7ljxhERo2u2HJonadni5Ctqv2KBdD7_JyRQeDmuPjUF9hlz1aFB2TVsAodF9AJkgKEElRQckXfrkm8hyTrgJGLSqj0RALqXH1OkXb1JBc-WN7ofCkFXuUeCRC3YeRxgIDwzylu2rgQjtRQQOlHFoqNOGP-zJ_dRPQdWRnD39rtJBnj4N4DLSam1hsnvi20c0mELjMayARhxPG9w0LFDor68rh4vUfp-Qm19oQnZOBpvwE9jIzqSY6rjrCjIPIBNfSLd_0NMF8V6nXmBDxVpLIz4G5tQMtJwFozvVYTdF8lETrBb-NEBC0zhaapTLtX3CY-K9eBHc2hhFARqPoqRb4qtXqH-zQuvUu_hAyV42eIkYyGEFl4lY307WNMwlvDStWpMtM3haxwHDaRC_BIMygVPUq9Q_sIFBvU11xgf4j16koiOK8FAmgAGm_fn0FonK-voU3jgoZJWSRuHohcmMZPKdY199Xv7k=w1315-h1700-no"/>
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
