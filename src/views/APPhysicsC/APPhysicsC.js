import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Mechanics
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/9LM8oj4XV7_FfTMrLvKS3ooz4RI7GOOTp0AM-RC0MzAyYFqW1KiKYVRB9nIxOqqemaqB9ZA8iiBmTujVicAv0j0foi08pVc8jPedl7wZ94f4frOalkqTzTmIG9Pwm_BmBHJvb15pg_j8ZWLyUiuxWGTGG4ETWIBn3RoOO8ESmPCktLwp_VFC_New4NIhUl_jRdSu7sV9mW1BoMNuyp3UCES5-Fqp-KFxGZHQmNgJknbpUZNyIlkBNIdpuaA67lVwLqxxLtXfAhrLmGv-RwYSbkVKhrb-9mQnB0rQMYiVzxdE8d4E5g6UotUJ_5fHdfKPVI98j-BZmnyEXB8WvY54Z7DshBjJzN4m6iisFVsXHWuAyIIZSvGN5QTYWkzlkn887zxTrNIC-R3MURXCf_MovExhbF8sOZug7UdSL8l-jhSPdvAfxyW_3zuBt2ELOlQjmgPqNgF_CrPcdtEMjCm7G1Ig1a361vdHsWgwvjD9EE4kSXPXOKxRZl-dGKBJxZ-np56q51FYK7psWszBirk8CJpCJxVFJ8aDqFMAFaQ_mu3jd2ItAZZ0sOKHrQXgDHZ7uOrOQS8oOoD6NjsgEc2bVh__1ulm_RInGaZ_aFk=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Electricity & Magnetism
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Nsm6a1SFtT3xLJExRpzx6Pm3dBNi6qA1jPLuGrqcAa18I4b-zTW5hgmJapIxKcatLOHcVPpndLLZMYMRH4NCEZIIUpO7P2anuv0QVEwAmTGtiKG-0Ui1eSHrbLB8uaq3hYQp0uXXyksvweTLkxsikOb0G197wb02EY3FFZLhlRyG85L2tWEwnbmJYn64BupkUi79DKaJIbooCZ5Ju2Oed0AVg_eFKyoTz2agqnsubUOH-fZ-DyKhPvIse2SbV0NAm6eBwN6lElKytnCnBqY2cuLEK681rq1aLeBUprBxquSqFO0ZX4g4YT3SthGWdcu1lGAm8UizXBsE9VuZeBS31rXpHtsWrysTxiEFLYmieczwggMCn4Ma9FZgNTujDTYQhkpy2O3m8ouAWVVXu4r7cArcbRHhFf3zGmIEkizr05sU4N3r47EQJcHSBeuwgxYfIK5Ddh__w8-7DjOEeSocpjSjq-SZmsKCLekDCYuFa6k7ulx55OxhzBIdgVzv-WhUW5VZmBnIF-4lC65w4PWkbBLsUO9Q8-Lhahi4-zwGbRZRucPNCQnEy-NyXVGpHkbup0xbxWc99zjjnZikQNRm5-ROzt3RBiyqGzQwWRE=w1315-h1700-no"/>
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
