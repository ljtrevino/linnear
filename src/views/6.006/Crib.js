import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.006/CribQuiz1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 1 Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/PD7o--BvVl_yJAypPob0mQMc81ReBp4w324GGyC2DdHCpW7VN2-_6pnluG_oLP6sZ3wgiYI3K87MzV-0UkAuiIK_PnFFb6fyZ58Z6rH3Fr5UhYo31wHPW309_Vj8z5k_dsSkqW7rzO3Nzt05pq40lT4Z2grXMmj3j05nPa24zXS9ltc9qq6rO0aFWLS0WdrsU5keb54hMBE9KcMApBZseYooBNFUuCb27HvCltjy9O_Bf6qjNyeOxHkBW6ZV8ni0aRK5vwhlT-Bg8rzhT-ezaITlSN8NzKGxJGB6yZZmxJTuhHRuC7Ezrm5WXWhelRB8AYGXCs5HxEvwY2689nrb2j83Mbja8jw0yubrPAu9Dn_aB6FPWzcZ3W3b2jO743qbi15eXxtLkgY-sjJAa2aN9tt1lWImv95bLr5oKnIX55QzmUVPD8kmSP5wzPr1eRxkGKHQBmCVo4WTcZ3kd3hgrUVjtMc-PC9vTN0Z9NDhMphNQqpSg_WT-cBwEF35Ws_doUEEAbeCMw9hy1YeHlgXs6Xu0wqw-V3LQATi1Gx8ZQcjafh2qNpTR7oE9fMZYKGzhLeN7DhgG9fJxuUZLqagmCs8Zn-dsaLyD_N44IU=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.006/CribQuiz2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Quiz 2 Crib Sheet
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/snTh6L6cwk4GQL_VmOuy2SPxfH0G0T9h5FwJlg5mXeKNJeVIq89Kf08Ct9g6FV1OyFnToajSsd5-OXLbJJ3N5VAhkfBzNfpN5Ni5c9HOPoFIgo8tVs1qE-CV2sbVC5AgbV1AXzO53cF_wafeHE4s_wJ7yGKSw_w9qHDig43aryDHUtKh2Qyh7mPFwFw_2G5-iMkq2pNyt3N_iy4qhv9F8BQ20-_q5QShLrJN4wFn3eYRJWTkS6zVdznKlxgHfhpOTovuHafEY_ap1hwZ8MTYoZyEtcSy4l20l8Xg_OtSfmcTJUAV2MBhNQzhg4OuvZUrkN3MmeWxiXtR9o2-d4ESS_DD3tcBNrGGPSkZn6OJv0RYmzYHZcSJ_gOMhn310q5pGtwg_St-6HMQxL-_CnHO51HClV2-5gI1Hr9WUXhqjkjL9GKY2XCQ8G2IF7jxaI4pd9x5SZ_wUCxFVJvpyA0Wl-N1lDyytVJYm4mwBQV8sZGqOTvoEWPhkmaxPtyRUBP9KRJsfQaAtzAeytC5H1TEggwniGj2fqi4dyRxsK9awEmoA0SgScJ_uUUKzd0nkmkQteHUmja5JOe6_KhFJJleJqMDqQpxR0gxYV_n0v8=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.006/CribFinal" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Final Crib Sheet
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/PD7o--BvVl_yJAypPob0mQMc81ReBp4w324GGyC2DdHCpW7VN2-_6pnluG_oLP6sZ3wgiYI3K87MzV-0UkAuiIK_PnFFb6fyZ58Z6rH3Fr5UhYo31wHPW309_Vj8z5k_dsSkqW7rzO3Nzt05pq40lT4Z2grXMmj3j05nPa24zXS9ltc9qq6rO0aFWLS0WdrsU5keb54hMBE9KcMApBZseYooBNFUuCb27HvCltjy9O_Bf6qjNyeOxHkBW6ZV8ni0aRK5vwhlT-Bg8rzhT-ezaITlSN8NzKGxJGB6yZZmxJTuhHRuC7Ezrm5WXWhelRB8AYGXCs5HxEvwY2689nrb2j83Mbja8jw0yubrPAu9Dn_aB6FPWzcZ3W3b2jO743qbi15eXxtLkgY-sjJAa2aN9tt1lWImv95bLr5oKnIX55QzmUVPD8kmSP5wzPr1eRxkGKHQBmCVo4WTcZ3kd3hgrUVjtMc-PC9vTN0Z9NDhMphNQqpSg_WT-cBwEF35Ws_doUEEAbeCMw9hy1YeHlgXs6Xu0wqw-V3LQATi1Gx8ZQcjafh2qNpTR7oE9fMZYKGzhLeN7DhgG9fJxuUZLqagmCs8Zn-dsaLyD_N44IU=w1315-h1700-no"/>
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
