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
                Full Guide
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/zB0RyGjqP5v7vh89eRnsM83bTkTutB5LRTaIIAOC4xwwuCuRgJ0XQzjCFxc-_q55enNvYGD6n8RIfdNble7buxtT6K6N-1RB8X6Mjxt3MEwHzzlREZjaYlWK3Wr5Bh4juCovODJnlpzNBbbZI2-CLWzkC2gEHPG5nfXXTRHIz8XD5RCQsgnDYobIsIf1PieYh0yJwh2IbeX0Fv6IKRaBgqfSgmoeehnmpzgo8C1g0UEUKNBFX7-3EJDvPzWk_zRbyLhidxCyB75z7Q6BP3OMnMX7Vf7vntnAeog68W9CNVhbVA4b3ommuCYi4cc2MJVQBSDj_Qdzvt5ebjmbjTjhNNUlMyv-DnBbvYy-kHJnI1Nhf3GcxxK4dsvckhhenTkj5gmnP0zvEjevYHRL7BH-RTUMpnxPNome1Z8KMgD8JT0wy96H2CWV_HHXFohELGfqQAhIRV-GJhkVqJKWwvsmTqZ2sWeC3bvozStkLNsdHkYFm-Yhvw0FOPQ_3tiP3SZxlaWwqmAQ1Rk-NdvRqhLeGpsqGYsP_j2coO2uF22A2lxNLhcbhWd76dy_zaRWtAW08MgVkm8mfJNt23eeJ7kMjjfyzj8PdBS-q3OcVgI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 4
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/6UFr5wsju_wjLUMymB6bocUA5CQKjc2wIBVRNmPxCxt0S5rewFfD41zPGND8mtwNDhV4EjAdL-7fUppwJuYisnyG88_yT_i1RrYh0Xn-yACn7Ohs2koeU9DhfrMnFEwKUp7bokJbf523thd_0We9QKYUeE9guZhXgoqzlQY6lWU9In3btu5-F-O8Hm8RJCpYFrcZUb4sJAHoIaIQOW2UTEjJ7j5rPNasPZSyhgmKZ4QRJh2OfkP4cTqRxNz7quvekTpzhvMPvyD4DyBNyg0slJ_PJeRqK8XyXi2M2sSxzIrFL7-OdaDOPvOygMke8c6rT3PbZNtSi1nIyLO8tRYEciEU1Wc6VvcaVJGuZcjPn8B3cfUGxjRBPYmWfn4puN_TlPrGqMze9ShEAO5BeT9Iq2CaLx0mw0ds4-yLhlEMcRyR8tq1pwTuCPX2NfV31DzcEK1TIIH5Nqc3ysjG3I6Ivz2yHpZ5TX0eiv9TXQicORg3cJhdTlDV_ILNUyjKJD39g_cad6l4UH2EhK3ZeGku6ZhqaxGzSrtS-dY6e8ujR8Lt-9WqMRH6jJ9Fgh0se7UIu7MC3_H6kX61TGxSWd-tqwoHBIXQPCq1Kt1JXKI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 5
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/JReOzskaq99qHfvjFQfhpLE5zEdkJ0kEnbns4Qz_9Rfd_VgzpY45ywYp6BSmsAsCFEXV7OCBtzu1JOn1-GcluqqEukCStiBcITOCYoPmoxtCTM2TgR6a58Z1v6mE8PHMotlSk6i4A-6P02gXh8hHKmlbGe1bzDyPhc6vVgJKHTQOHGtkVs57KJg_50Aw1tvRhFbYp_dxWJ0-PX3sEz476RXq6AI0pGXYvVcv6uMsErjiB3WX1OT0o157LOF0-0duokJcB994ICJLKpGUWfkmktdNP-qHaCzoKqDu9bV9m7gJI2K0ecZx-yTdNCmB3G8GzWVr2Ak0EMqGonkt_2tVdgcaQYvbeIo_7YWCJeLpvtb4I513vXdSRaVVnNIAcvJua06A0-Ty7Sl9iXTpdaItMmB-IhSMaQmcoSskkoktXeZs6sH6CK8FrNyT3cn8XFqChbePXjYDNmsK8L4n14dBHAp7oIwIdreCwJMJ814F4ez40YYwraEoW-PSvKux0nnhiRoHkeQTWCFVOL6pZTU8zMHPeG3JaKy4ICkg9eHvllWQUdRn5T2rsgIu4mSnJQgxDGRSBEwgsdUcCa8kKujiObUTKngxFFucH1VjNtw=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC4" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 6
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/hLcbWV8rRaFev2DvpYQxk6yORefsqe9dNi21jLVr2tUB1ziXeLqrReYU8u_IqUdAK8INCJrDhvmOA11n20T8VHMErZIYnCjbv6Thu7dtJ2pg6-S6PRoK38T0hBw7l-6YVsSpqxa9cN7Cp4nBrLc-_U1wLCOO_-vCIzY5EvRkpnfkpr2T1qOT1ro0zNECs-tIG4OiTD6io5zeNwgz3RYzVOaZT69lCoXvVXWE8hKryB9vku3FF6NgoRow3aOVasNTAg6l-eBhsYAx6avNH6XdZoUWjqPL5dVZOQEzjfob4t7bw-Y4zdMesohpru8lyXAP3bA_KYB7V2CRtSUcSK6HYm1aXbJE1z3tERPbu1_R_ZI9WUJpymufOX90baLsLb_Uh3o_RkNSTPiTRH9pg4oJayTWraYmCbtUrbYuYXFWGDSui0TWo26_Usc6iWnKAyk1uaOq8Cps7g7InmP9uyn0ERLoCrTHh4lO1EHn-HjW2nyuRkPvrOI_CioEV9B_i74NaKRKhF-X_noSoBAhA9uEW10BGjGBAM-PC9jaoVYaj2LrqM3nKMPEd6coo9UhgSIW23HMQ7t2xhMr2jogOOL-Xy0vXo3XTi-9f69IthM=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC5" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 7
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/TCqN3KjmlY5DpIZc_eQBftz3Xw9PmY5vGHGXot9oZXiGUJFC0nyFdeXdPj0UduybjG9vXmrqIIqR1LBnM_txbCuRnrMdBgnhHDXq-YFYneAoWYGRdouxoLEsHXpmd4SErOA7rDr9iBAkuIGFE_OL0M1vzd6-GgA8FtLA4rrJhPzL_DoX_ISVaxXFhqDqo5jYaN64oTxEExaN5vbIuddqthqVogqvOgpQAE-2AFJvLCOFAN2DGYJ4K8gRLZqS__Gr6Du3KAaGXxfQjZtslQLScDj5Iobs8ZUfeeoFqsi3FoS8EwGoTnaD62_KIuahpnlPlj8Bf_P6wZB9-ipUAGobRXB6sU2BlhbWmswIg2_-19sO7Tw2poXyT2sEQb3vSlvAxmjP_gtoUAAFotWO_kSJCyxiZA1Bx-xwW68y8BA8mmRMD8fiG8B3yk3UrpK9YnMxriD_tcGov9b9SifT0UvQreVSFJqR3FmEXzMv0UsftEEixou5fKk8PhftLuTzzlCd8y--txk5YrdOgX7DUsRncxpX6jMH-XIU10I5oHU6viA03XqAVpPA51KEDB_CuYdVxQH9_jUHcTWARfvFBa0NSAtaHPW3uHtTDt493GI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC6" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 8
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/B6AuycXN4lA2sB633o9cPm_VG6Ti8Lfgn6F3q0zkm9SmC5K8QqDi2c1Twfsa3LvpixHygGWfxoJYVKYTe3T5BdeU_-bOIvclTFS3jHqR3Hf9LLm8W5gZ9wEsbj2V8-gdV1bhJImnFRQ5B7hztvpJ7kPeAmucPh3xyZktCtZb3zfvwpLksruaTEq5QIt1VwHHCxzrRvindNOl_7FvQKeldZRaR_v7KwZpBjgmm8L5BRQsAR3w1SIG5mus63Y4toyvjXCW79AknsPwLFJSeOuI15ISigH8zZ18unNE5_HNEpRb5uQRC5_pJB2x64YR2jOKfLLLGB7qsKQG8I6MQHcm86-sjq2h2V14Cdm5l2uwFT2GzefW772lmL_HSu2k0w___smjbALCNXoahXYiE7NUSNo_G5dlSjQ9XHwIgIRxJ76FoyhweQJ37ag-0DF8vTqxM1Zt0-8XoOAu7t-T1zqZPzJzX1t1r3vOitE7sBNF5fbgP1axRQ7fytF_HXjLZLbBSfNI6djdi8SVsfz19rnd_ZPW7AXrwPagvvtooRkxdARf9Yfy2rLrvm_hXYQDAwC6ULnvsohnop6twY5GzVfiUt_IKFKi9KolPy74oPc=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC7" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 9
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/41TxstAMRdpNeO10VgbEla-rI3EmO3Xw1zIyq4m7zx3jLIa54V0JcUswoh40-uNFEW0B0BW3yXUgEBILbBgyZ_ZjsD2Rg_Pz8pK3iPFZw0yv1z4SkaWqxnvFXpuIdlU8givhmZixlrZFnIJJTFLOiSsIOt_TU5OnZs8EXvAHclz5h2-Dk-O7I3xBZCWwuKWXUeAd1Qb1i3mnlwRzPeMxIydk2TEpRKXmnkUBVivIPifHZUqGAdfBBkUvb9OxBRHqG5tamM4uMlEeck_8f2pkcVNteIdkrurfiMdGEMiyv6ZZdHqvrZwdKm-_vlmCTsRLYigR1HMSid_gEblGT53xryUrPV3ADodpxmNSI4tVDUQR97c3czATjEZaoaUi57s9SRVss1vZ8AX6etXZmjlD-IO69K1joXgmLGaFoPCtyHhvYrk06ew7kaG5oxarorgiLX6l1BQLpn5-Xz7XwK1p4fUCJeMr3zQ--E6Np3PdBPlJia6vmNnEjS-0eZBU_3PjyuPd7l4kL9dG7j7i1WU2bXV8R_UjmY69-xrzNc6szD4OWuSZkzFwiagTPhq1o8Ngx0Fsvph8QEMYN82R99FXhmtrnFnPkV39tSX4YxI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC8" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 10
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/IV1IK8vYj6RlZXMqs3f3UqwhoeauuQrkT-3WYMvKVFK5p4NRQYl7w1CPf2FlH6YTAG4j_qzXM0T8qoTLKC17IFwwistaQUqLKzSZt494UsxjQte1ClD012UNodXz-Rb7nue0vjshM2h60rZVkipsUKFhfGrZl5_sKEVc61_fG_QUsndqSUDZmSeLzqA64Z9wFdcu6ijCPI1FPc-zW8kk_jV-SXoNKLsmItVhFomztO_LCOM5rvLzCQlKJ2ry4iE5HmIf9s-E9sGy7tl1bZE-Oy6fIU1vuRcNgcu8neqoNQ5snghBhtVat9TW-hsg6AgMXY7NVjKUNbsZwZkDZjPlZMRPGhe3Qxdd0ZV4QWSnwKnscXhnAXhF_n7usXEfl9ol847Ruanj2oRL1K8uw-0-uDfzt94BfT4whOGV1JWAHqfUooLf9oS1OiVfYPU5aAP-EYtIKecxcYna17VmC4EtIO6X4oaWajWZHQjEGPL4rLzmDEOYLdSGt6CCjX0rqloVvS4_vbSNPIixTCiFbGpX4VDl3jiXk7ZihIRD0xUlNNyFdmJz8_xWce2kXq_7giWd-LIGuOTlYE2dCE3eGO6vTMmHhm9kS-qEP8O0JoQ=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/APCalcBC/APCalcBC9" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Chapter 11
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/EUPebeg-YmtQYxf50ZhbP_AoePkNhPDsDhz2nWXbrn7iQYlJaJ9tPJSxo8tTywXRCe77n-IkfhPquDYxwF21lHflpsSD1MgFTjrWDlO9KBrqt5_dkwgwx_fnQxJ1Pk82RVMbnXLaVJ46_AGtMu6-ETWw7KaDfrVUHFeI9vch3_oO2PLxyP3JruiiDwzHGGa4l-CTiWTFuXBryTQHBxQEJEY08r_7x3ftup7C9KswzoWjGBuGu6wM388hFX-40-yCmfhjTvjXHVk8e0JrLF3efz4UxxWu14SHV09jPNPHpO8yiJ0ECfeVG9o3G0mZ3UbOv2-LnTEqjrRSehlho4VMNivE8Bakgtu5KxyMseB2qjLFW8RDCxRRepvRI1vVvxD9nm0bdZ8jJsMWCLOwtMgX4W2PDP_Ow2zbjQdTvBDQBrMfV4BCKPszgQbGDLMf3XyuoEmD4DJBZDBVTzOee41DJ3fConFOW_kxWRHQFEjZDoRFpq8FRUCEQuwQcRsuXHrcmI3NkV_oAhCwLtjvfyUtzYDGtso4h0UyxMoLJasxXNio8C6d0ZUhwbt0QbMymEUgzp3aKFq-XQEe4LwXke5iYbDRLb6O7iX7RQV_IeU=w1315-h1700-no"/>
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