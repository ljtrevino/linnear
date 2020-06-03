import React, { Component } from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Label,
  Input,
} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 1 - Naming</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/fswdWq8gtuowwU4siTFrDAwNXaAeVGMriUjCmO9W543mCex0LHRCgcDknKv6BJGlNzu7Usx6OBeMqITKQkBGIAGzbotXIhM-e_6lx6L63XeOxQ9Z9nsvTh2dYQ92bRV0IuamFQj-Ug=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 2 - Virtual Memory</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/q27C1sEY-NRo2V8yY762OxFeUPw1CQMiKKjsXbvsdOPlScNhM45IIwB9dX5avR1SfjKBUOj2WlfSzwl7kBbgDflO0AtVZLFX8N8Ock7RHBeVOVPeEN9T0dG0-OdkLY4unVYHo2KbcA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture3"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 3 - Bounded Buffers & Locks</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/8w8Dx6w3HpDA02QH85Gq59KaNnjdfc5kr8BB_QE-drTFEu2Cw-6nL36jmPxFz-fm-5kOMXUTzJBPbStfIKSvcmUkzxK_xjwmApfhSwH70tvIMeP49TK7a5OjWxdpG4PWzucUmcoZRw=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture4"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 4 - Threads</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/Yha30m2uvKpO6kiR0HjXAa_CoAev1qhjPUer6ZcFJGmYUFvzbp66oaHBJBiaTw3N4RASTAx0RGfhSvAShZDomLMREzDUs9fWRC6uZrPKx5mcuOBOhu3d_IkadKt5_-MuxJQsTVTRlg=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture5"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 5 - Virtual Machines</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/Sa3AcQR-GD_z2HibSkUaBTQwwl4aOlF8Eb9LwLb3gIEOcux77vlANLMbXL3S2lirFG5MkHaGmTOKB2M710TPbYgEBbiR5EjHHx-0xsRAJTsKDZNIiuc7eSKfNrDXf0RwSa3lsmHMng=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture6"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 6 - Performance</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/nNK1WH8XYyYBGh18Srut8aPE1pmwrzaJR5f4H447ljUmNiHY0Y7aFmMCfEPkWFwHfBsGKcRzC52o1OXAGfsaMsTIR-1qS46OJeaq03SxkyOP89ul_AzdGqY16mn7siCgufV7R-cuyQ=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture7"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 7 - Networking</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/hUCD2MNeK86H6Su7nGMuME3bkx1-JuwOalxfEQkjvE4hxcT5WUD1eRXSwfeQGNIgzDCmiwDPIvAE4rOvmqkV5yyT2n7a5xmNKslsgBdoBYwImCFiQaMLnq3BXEeeSUgzvV3AyUSoeA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture8"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 8 - Routing</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/AFxMrKlHCy2pxuwsUOclDynaKSQzQco5GNKDxeDTt73LTBmbn7MeayIaPned5hfBWx8e4yRJhGSPlnjNB7cHKuhnd3nomrO6QNcHZdUXoarfaycbuXiJsXbH-vu0NaJz78eda4-RaQ=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture9"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 9 - BGP</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/sbEwDpW2NRsusMl1X7f8n9q9tX7LiLOtkgLyRuSdsAubVA2iKReepBB3Rlm0-m_np4og27gz0tBCRMGnWZyN0g8QD8BrdM_E_-Ka1lVkjNo-Xc670tGELbRksrIlUoK7CS_QSjJuHg=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture10"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 10 - Transport Layer</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/ZXtxZedMEqGk4ENAdpfCUeGE-cfo1xvZ6fMIsEfftSSBzHkEN8PlJECVpgKgDk8JLQZYILZPH3jzg17qQN7FWRDCR8EN9qoj03wG8_QTnZouDQl8deUCeTr913RXKPt7bQCaX8Q8EA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>

          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture11"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 11 - Network Resource Management</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/V3XQCAmQUT6XwR4QLIFip9WwtoBFLKwUXbCWocMDaO1Iu30kSdmsSmAS1kSG3ZMo7gkgMi5kmF1Er1UFDMo9H3h0tDb7IYmqR_M-RMtg0mZiCI8otDSmu5tog8Agf5LqphhaX6wsNA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>

          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture12"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 12 - Reliability</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/z9juFZpeMwF2xDunN7GIEBLIMd4c-xlT0sTyUowcG6RUEtXMp5upq7BKYHcEsHIDH24DNHwMOOdwXh-6dKOoh_XEk4em0DXKYNU9S7YpI2_5Hgnq00-57bXUl1H4iQRlyA_JboRqeA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture13"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 13 - Transactions</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/1SVP0HUvgUJng3aLdYWy18Qh2ns3K8GOfWu6qs5SWNoXC3BLAEGmkW04USqKfJTi8s6uknRXMnvZzkfTzKBxVMP3VMthqaXmBepejPr3GN0IlRN20WHDF8dW3akyI33J90hHyyA09Q=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture14"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 14 - Logging</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/QZ4s_Y5-lKDCu7zsHrRB_zUAaQqxdRUOXce8QiELPMm8GWYv30txCNPbqukIF5359k9LBicqfBAB6Xuxbjiylkad3_m2aOnzPx7bFWw3afgbI9pcC5t10RGaNUTmMWNr-uWXp7VeBQ=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture15"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 15 - Isolation</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/5c2P1ERDXiDSKQOu0ggaT4J5V2hHm6MwatbuILVcQKFeXR0w2uW97I8Kok1zpX8g-8HbBBuMgjbLm8HLIsT46lKfW8MJWtvvyRUcXI-mBujWhwGFNFSqueLjMOrTtJkO2Q6K04GlrA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture16"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 16 - Distributed Transactions</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/nrpmqbZP0bgONR6R-AvE8l45nSt9SgaNihlA9b1vK8S6X_rh_LEwy_a0hqwSMTl35HGq-Ifv4iDo3YRwWMW9tA_GMdSsP_lccZz-oNoHAU56IEPmNpbmIu28AGCfSluAa9NCTk71fg=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture17"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 17 - Availability</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/CD3p2_4_w1Ucak8PCYSdy-4H4efnIU7IhvVHEFCW6A_6QtNi6tMqvmF7BNIY6c_N6HjlqAZwQGDTVNZq2qEubwBx_6wCdWTnW4R4QfwYEvG4yl1OoegTzLs85brSD6Nq2azigntEUw=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture18"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 18 - Authentication & Passwords</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/vqewLHoUWUvWMTywpjO7f01Plvxtoo5cWEZp46r0LMc0pTnp_PPfa32b6gxbVdsa9vauX72m-rSyOHum_zSczLkD2wp_rU2kEdJEEvIzrsZl6-4BaeZbl0R5sAA_nQB1N9N5um6fPA=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture19"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 19 - Secure Channels</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/JQxs25sPPsOzwYOACWNPE2syVLoLlPsThKPyq3kJSxFS4VnkGEuVwVaFclyhD7SPW4b142PpeNAA0CCnDIIA2kBvnPz0fYZ2mljZ8g80CAw4xZEa9_6M6F9oyLodhrxNNouBQyU3Qw=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture20"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 20 - Low-level Exploits</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/hL2ZG7wvCzcV-fSxvNB8j7wGHaMY7m3a5ERLZSvZBD2Dc99sBlEkP9_Bz71LSRYRVKwOEuKJLK_QQPJfRKo7vqbBFkM6Guko2hCpu8Mo1UujAkfMLPDQ8WzWYZpwULSmSRheIeCfxw=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
          <Col xs="12" sm="6" md="4">
            <a
              href="#/6.033/Lecture21"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card-accent-primary">
                <CardHeader>Lecture 21 - Network Security & DDoS Attacks</CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src="https://lh3.googleusercontent.com/f9bb0vHZyhHkNqIEieLNa2M98gKtdWsHxsAt3nnZ_XxAxLFp3ykMmElHLleDFp_hhxbIEuTWnZY7Me0llAc5pyEMl7ListVXKeg8HFVeJAS93HsxLtNQbHuP2v0mamkXep3UzatyUg=w2400" />
                </CardBlock>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
