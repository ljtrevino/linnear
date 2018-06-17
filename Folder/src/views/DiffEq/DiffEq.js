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
                <img width="100%" src="https://lh3.googleusercontent.com/5XaW-fxv07EZhIiE6R52MvnQyh22NuNdZrYcifYfJIfCWnDBfZ4nBXGuph59zLeOrMxBEXdazSFPOjCrcW6h-wrsc0o5wwiBqsdtA0q9H6EsgACJEXHIB2yF4t5gNvtqy0fdyTMXcUSyh8DSJMukR-5KdS835WrC52OlkSUb0O46ihezuzdW5tC3O9dKA4FmOrAMFuSd2RBjEQSoJ87BA56Cr-UjHd1PX8mQWRVoOup-ZyRkTkbzZl2tNu6ri4oHn6yU5V782Wr1iAr0MZJTx0-ka5DxCUEBMuAnw1F-Og6Te1UuIabq_5ZmSGn-928PGrdGhpI-szQciWEnOXpm8Kdza8OFcnwoCmFwRnyuIf4hgHHTOUI2ZIK8BLlmdsmlQlzfstvBMfHAaDzEb_Di1b5dINOzyJgiGQewS7kijgzQ3nEpIyiR4k27WdcPkiO-fWAoRdoeJhljNe3q_MP6i4kmBH7AZhdW1gOG9lbtrU0SQRG0JVfifZvgbZQTedgm-OFUjLct8YL6hhZWniB9B3CBcWlEmLFOF4yVt4p_ithBntJl-GPiJT9OEnPXpOMOXFhgYXCfX9u4099AvfvfW-Qmvj5OisGPL3yM-Z8=w1315-h1700-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/1iRwSPXcKhzkCnZz0w58XV0zlss5uPFwqOXqQEw4MtVsHoXc2O-ZIZ0Jblo0X40d70errrCAuq_LYOXmiqPrC86cM0FLr3gF4ZKb4GJUDXffHA6bgKONj0ycIZemaBU5q4b-GL5Vl7v4MNcPf0SG-Q3yq1uGKzHTSeAosXmsevjYhrtZ067_uZuUKwKKp8ixp_gYDlTt-xIvfCj5tt_sFNdBlxso5rTKyWp0N0JukqOUbXU38tr4DJ0tcxKl5R2_wBaGuvlBb8dayCdj18KTg4g53SKpleBupI6P1ywq0ct5G6PMQvsrtoqS2kaUutzxvuzLJzl6W4grLTR6Wh1vmXCIrnTbGjwQafkWB7R6rJ6qdI9lHDG_vGkYTQzPmiyRMy0TsC1VW2tz_9YvSMFaJjS2ovgyaf8ZTUqVhUieqilnjZ6s5N7OzBJigcKcPDDi-7Hg1r-XNX5wf7eB2R7k51tlZS_zGXpL6N_b6eTTNOd-qYRWwoqLpHGfoVkMs4ZZyh2yrJCtvDWGq9Zwr3FdVQzm1OsT3XozHZNERGigl3eS8_RnZOAuxKqL0wc56qIhlMaefF0YLbY3FrtX85atW-hrNMB3ks3wSE_dj3s=w1315-h1700-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/XdYjkM_Y8iYiLX3_mJP50pVumcvtfbW4svcnuhOhhq2Mape88mVlirOlTQirsTI5Nes9dJ3rquU77DDFDJGTgcGdKnNmeLsvD0WA0_5aKR62XviFFrswtaCUDNX63BOM7tAg2MtMSgpRIReJ7nE_K-UmbQ4O73Uy7y8TQt7k2ZouPugoRbIUlD29aKy8jxkzu7yE_STYlQm23gPdw4_BlxBL6-iBxs2sAd57VJDO6VUJqLN45DaVoQ2GU8VkqgRULoi-xEd8nQTzjp6MxGSw7yRf06TyEl_9m8w4zysb3A-SYbylBpdCT7QxfZJEtHp6ygslAH_HPPv0ZM9QXUHB4fn1xmWfoJ-VxoNJqHqjoKjo-TEgDy02wBQ6lJwhpPMfjpr1tAICe36gYXs54yeyxctJwE0SlybBWiPVEBxOhvCWKmao1B75wY_aD_x3s3fM38rQx6DuscewIKuAFCI9e4NcIMb4Qkenv8nOkT-2_-yMe3nGqBjTtXuYgWZrkNyNHZGeaYVsBbRsBKjxcixfMDLQepeP2Ke4al2ahUsgCRcijaGN0Xte60M7W1BWjmiWkuBPTSUTEA8sVgrJYtbKkLw8j3tvXFSfqOi_5x4=w1315-h1700-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/3lhP3CY9LFHl-f3aIErWoYYtk2uxc7mkpiP3-S60dacvkGHB3xmfRQR9PlbiTsKONsFIOlObO0Kggvl-OPYDn5reb6PVB-sL-aePuZD18cEH6TbKfVXRUQunytLrjCKmm7cYEqRHD7XjLO-ebncTeYPz2TMSI6z8z1v2EcDJR_Aw1twPAovzSmjGZOCYS0Ns1cMwE3KrMGMTaqjrUfjfLtyC6GfzB2e5hPZIvoipN0Py4nNj_GpCPGbyxRxCl2XQGf2SCgkDM1G6zq31DLRX04FgzGinKEZdc1cG--d3MaQq4BIcULZupYAd4yn8VcuRRmZIoK2pTDGgly_2TtCxei4BCfwRzZFe1tOyq8Xsu9aGbuvWfrvqN1NDm0Nb1nEcCZAmmtisw9rlvA2rpkiyIkvR5tm-vy0-kjQKHHmfaKcWDw4Vm4_QkTgHu1R2em99Y3VdiclrgeRUoKTJs2SKnVYeEXxJ1E_uV6MauaI7PelbfGPgBVUmcWkgowyi-AFAyHzLtaHxZ2Img40X3dWi9kYXPchl83zLfgGIcQnXtrb89eCOg9ALnGXc2BeTWd3OxYuj-671gRvuUQ7kMcopXbxalsCrBWZ4QPIuJJs=w1315-h1700-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/wUmzv1JMhlCwckD6GLDIffi0f437T3pErdqfmNSdJ2agX-lgafagwcClg3OmS63Pjb-JCvk8aJff5UGkIPyYbGsgtA606wLoXqLyKR3Om-6VltkKi74xPKFgNSUmDWV0ifrAfPgdNOvtu5E3pGkLGts0vN6AtmNpLrwRkDv-_Yjg8P4LlrRpX-h9tEqkibNF1ZYCeCljJ0hnyQ4CSPsNN4lO48h6UgOU7Mvd4ypIxFerUrSUih3Sjx2c7xenTpfPJYtHiHWLJavhpT12l8clUn7AloXouv2Z7A0ltrD73v1zGXSMfSh7hSuDoDlPAeLiz2munUQsqvwCzfCq0xMI-5vmYBUz9OWbgKM2_JLjX-Fay4YrtUlwDtVf-aLmIfhymsv4P2CU4mBw95mKOPprxed2s3QiEov4pEnTGXi2S20-Kl59HUwTgJd93d6PSXOh9v9Eucywd07PBo_c7NVZfmYRLEcGdsqYx11lY2iIl0vjHgb4HpLWVlzWhsG4awqy-fxTsEI2U3oqmrkuzvi2OIkkH4DCCSaGENTeGkUGhrhNb8VNKzVJaox3P_6onLmstL7oiQxzzZpf3BBB9gvxbXHb_ntqfEhH1ivdRuw=w1315-h1700-no"/>
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
