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
                <img width="100%" src="https://lh3.googleusercontent.com/cXOpD-4dIzwQfxvhq8fa32hBVGV6CixhPp10NC2GPro1xbTmY-WWfj3klKEWXjKn7DrlPdApSYCjnbh1jWr66_GiCn7Cvoz_PtD1e2WB-CITxn0vw9DsFvAiDig8ws-rbxNnYNSUXhLj3F-SmkxHolOFn0S14MjaoLjd9o43WJcvYKvAfCZlyX8KT0UJc4suqUron7wSzvrXmln9w4Zn3OwZOG_MHW59DLsypy9xOF0w8b3Aq0qHFp8YqrRQsBvJqHVeK32LR0oJXpUNLDrUXQoSQ5ocLLiU04lMhfK_w7ZuyuzhTJbFaRB69GulZHvRBx7tnXENV-FWpuiJniLCXKS7PVTWSTxl3dK8i2V78YbT9iGyvYKcXUw3z4Pf92zpR-4wPy0evIS5GRWe9ZvuE_P6EhT-0dut0nE3xhKDbiq6AzNGU8GWjjdeJEK7uIi8tbXJN41raxg0GrCeRIzZSyu5tKTKg1QPEvuiIG-AmVQceAud2KWtANMXuf10Q5jj8qho0QiQdITkWPNrRkzmPDoIZ1nip45RKJLlgK37vqWwRVmJlXERckkWcMuSfee4JErSr9qVfuiWmgavtJjz3q9PAEhDqtBqqdeWLfQ=w1315-h1700-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/xIQL46u8d7yXX_r7yx5a9EOAw6syrJDzrsrGEIJLgq0DP8hnqcEgEJj-t5zpR9Uk561HevhwgIySf-FLRqraM3VjcuXC3do0qcSLthycmjuviZBg9-3MrPV8kHw0YVdoJktn1mZh7EFqh4LSQB5tXE_4G7hiW7execEKER41EQEPTKSuX-cNDLsxzZ8Nv-_YFkvBtLQcBWgIRcB23mGkmteACQHdu2b7BmVf-aBMzxCFjqbextkIphwRnIwAhowTW7bT1hgtqYCzFt5AEIA6Clxdv76IF4WbSOhDkzEysSN6yEkaJiVa5a-pRsQIJyPa_B0t1xtieB7V1o92YoOu5iYiP2DTvYDYCjBvU_Zskrg5TxHBteQ3jHlaxKocKmnxa_bNCfX8SZouHHvrwfGhxvJVl01gTVemO8oKfyy_Tkyg9RgmhbZC6iPDpp52Csv4_5udqvJH7PYeSUvROxKcl6VsJu-RQXErXY6Wc1wIwt6j-bjzGLKX7gymcUg7VKGL4a7CcSer6HOp8oJzgXcm41JS00HaD5qPXu6K9nzDsxrZQ81dx6WNV44QYGm3iPvCcSmWbxDt_UbkrRP1wOIogZHczZ7v3ZBKt_VT76o=w1456-h1792-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/D4npwStx7ftlLl8pXWfstos6pil4O8F9o9QBPxpYucbj2rR7MsNDm7hNVELYWcFTKfpiKR-1KWHM0DxP2zUrqcKZ56xgkmDtAAlD5Mj-J-3cOrKBEOJ_EDWB2yK-ok8893G-lD6IFpB1_sQoBlG-GIrS6EAyauHtxhp7ZllP0VHLKMRYt_tjtTnOXnPwyx9QoW5OaDou4gPQDC-7frYWflxIQlkaNsXC8KBK-KNzDA1Spa8th8prsVzbBxnTeVau1Z6VL7RTQ1VjTEqFx5z-Qxr9aaOlHgGFKTsJKIyIKnVwUKYFnI_uIqZG4eddwaQHMrC6dtq1kAteDILfiURW4I2GaPBrEmgRLaHDqWBxZ15QfgZewVOZdDib_14dWxKjpJuS37n3FnGr76tLk4gVxQfba2ZmrLd7EVlYsbi6aV7NNw4Mvu-dAt0QQ1c5mfp0gqQG-gkBtusQi3ix4AejLuCXpPkwlyHKYCANRb85-NsDJvNACq0-sK6fSpLuBhL5cr7kiMYiF1x8S9xoKA_5uDhUKYBzJ832e76iE5_EtZm_KTNv23LcT1uvjSFrPb7kPJDZfdx19ObR8tKrj4VJDQvOSGLOql0leYgffyw=w1518-h1785-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/F3qMifYUH1a4LfaC-AREbVz2g8sa-YER6BjxW3rSipMkJ52ZHpmoHHGWNeW0xasmi1njwHXdjF1-64dLWGIQ8irXXbalVTRsPjEt8PkBlgCR0b__fPzIGgR-aFjLn81bmI134RcD-57PHqKSTYQ2owJAYtK23RJ5BTggwpzpSHatU84Ebu8M1g0GMr6DwOtaeB1fRc1vkmVIkqG2d-wCVT1pVUhK2DAY0uNwvaFh0y0--ODjtCfl-OsnRA03obhqBRRA-z-WmqV5cxx4TzgGwxgNeRn68FSBV8ins8m0RJF9ZTP-hG5r99uaddwQ8FY-4_oUpRuHXND5xE5Cx5tPERVEigDzJROTGe5qJ72J9KHAdRi64OTt-o5v-qTQ8GH-pnhwQTD7dpwqpWQUYvjnTIoy3409CWtRwcGdeKi8ssEsv4NnWJRO7XcFqRaeb2NL3HUKC4FvdwerYN-ClZy77NsUu2zp0a2ZxHnXfxEJihZS3HyHdzSg9SiDzmI5kdSfb8N18heYfknCpxTC81b9RZUjtPeP5VSJXo40YhXV8376NPMft2i-fL0N8VqZEd7Tcka154phUir-WRveKkYkaaZx2ygBTmeEljPSli4=w1315-h1700-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/05yh0gVGe5QXFx0WSNyuTkMwKqvZMfjuuHPRSWop6tL66vezPLo32ctX10B7jYwclBasXiTyj325UwjhOiOaJqhryhLQsYGv6o4BU6HHYdCpqMvGnaDhzbPfz5nj7iYOzggiMyDlwDwd_tq7kOJ8vWocA-3yblbXJQo9AKsB8YLyMS5wbQqRR4cjLF-2qNn9NJIRoNAJxFMyRosuOGRKKuq-lhemXf29BSDxVLvUr6OF9Hyi7erJnPNdTyFveUZpCd-T3qGEXB7n8qAvHu4FBdJFph782GIZEbu2kKTH_ts7jb4LQUiyK7sl83uDEXpoooppeWDzWWXPMtyb3h1uOhxGY7f-ErVoHukzqxfafBkAuEo8oFHfTeNw03q77iJZsBQS8N34eB0idOD5gYw_JlFzhq88rJAt8UVNIpZZe1ymfrQh417HL8v8z-iG6YNB1XR6NkqQjJyOsiHSuBuDJtIkCEGJIVgBkNwDXNcinBXWOkTcFuFT4KIzgy3GDmdTZqJ623-gRE1p8llUBW1Ocy0unMdPpL6_JB9tYomC9Vd6RWEMp_dnDXuJPf2-tIoh0hpf6knyeZRieGlGsIbaf2HBK1BtJKJ8XSaowLE=w1470-h1792-no"/>
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
                <img width="100%" src="https://lh3.googleusercontent.com/S2alZNXyvOEE_LUAa3nuUjAi-uIaTxr_m20LBaG4p0cvHtSJ55HWyJkm46JIQpOa54FNOLnpk48Mzoeu-LIDxXg_hZbzp2ZmLr7fHbb58tkzDu2VOfzqyzcCLN4mWiFqLAB3XGCuG3C9ByuFVVkrBRWe-jLr1E51AG7GGwnxKnvWM790ukD3ctkinJOOJoNHM8uasP--yaoEGIywSBF1f4TqYYCvddIVAIydRYn0Oo4r-Nq5YACGlf-ZHEaKFhU9bl2ChKi_wj2jFAr0yx3M6XD3OWTVp7zEyZ6w5y2vdWh0OaNBybu5hGNoft8XKRpqoSSu76yryouoYm5HNJPYOuPHSJD4Hmn6ZGLORxSKamaFbKIKCTRKBUCC1bJzS9Fe6pCQn2tuCG0eiQSeVK7DmFQZsVgdLRliM9OdBz4r2CvSH5rck74nGWI6VVfo6VxnHpOFBWVoVm3q9Xyc2qLDh9hX7T2E-T4FTdVGBZc6pXaWFmW_U4DzJZqpldBCT07YgXVsk9zVfQPhrmnPGLjT1T87PMZkkB19DWh_uklvR8D-tSmgI9BY0CGErd_4bvsDXp1E2cjaBL9bjruO6hvIDKI19uGQ_G6UQmWJp8w=w1422-h1792-no"/>
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
