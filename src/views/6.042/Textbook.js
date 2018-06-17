import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 1
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/4ICyoXA2t_0ggU-bYLh2naM0zfs6ExYieZXHxjSu5yw-Q-InoHjtslxDifAlwsu16P60nKBRt_LkH6okcGzkaGxJMk6c8r6IV9ySPSyZs7Igjb5uQ2lH6-_E8sYSW91QrAppMimLH5bPpstTLZzfe0NBie9lforj25tKEx-I_zo7-_4w0MeOM-TiGOBUSPRzWuza0xjodJZdRWibgzN8z73iw-IuoohhWUWQ86WfJSQgu-sBb0bmzQXb4DMWgz8PJmYt1msejPLMIUYZheoWhKYhe_Kpn75YLI-JlRTA5IN_U8Nc0cQvb7Zf4lCn5S9NaJBnCQK0-sjmxffQDHy3IW5tISP-kdWPcd9_DEnikajpJZ-GZIJ-DN22xvDBmUe5Mta9EuoOQd0Zfn06ROMKsZB9LqT1Ufjnvwt2FV0RDmn_WA6TVa37TC98_WiPrbVXsPXQJ_jtr_hjHKwfbHk45CLrforPGZZXzX_36XmG777cJmpyybvfPmn1LzF32nmyvIFzagC3jVd6_MxDEI-8cv6LzAdeUxl--THd5kmWhDj4G-VpWQiwxF_SZUtKZUd8-GXahebopzmGbBGhVyX3la-ybpCJhjUMkYy3qkQ=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 2
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/7PEV7o5Gslf9yJjpBLc_fyC4jFk79ejFNpn_1ZLWJGAbRvkg8p_aGMJOGZIB0PBFqw1OFjdlpoE_VNpBiW_Fgu9wE1QUbR9-5XxOvpVubwEjCe15MdHRvMDpCFAJOvy4Wki9ZIvqgJGeb0NBFMO9TCJpxQ83k2FPphVkuVRJ9FTw04H2No6dARG33HO6f85W_RLH4IZF12b_Z4pekaIkUNf_7GAqnqjY7niz2wtw8QrFQSroN3tUjinGMOJ1HwWwBWKmUtrRxpwa2DO5XyuNsMeYanTMrxxcXm3nU_KGDWtBRa45FDBGlzqja9Hbq8IJKiSV2i_QwiCVS-AyewpEwuc5qHyEAuOJTJbAE-i4PHxwq9cYXVteoDnke0S8ADgqnWdlj_TZm9Tp_yyVeqbdIPXFaHFKk3OAluoh_BmRGLFcL_qk2Cy0hUBxqBEQSn7PPJFHzJTymC7YybYI0JMRd0EiWKhwRbilJhxFT1HaQR_DZuUzutac3pCoq_T9XAksYrLP1n2jkufib6xHeebsPFL9mVB4D2enlSMcmmHD0B5MzgAAxxnSnYUoGx7_voY7LvdsQO8eYhQdcTgjZ_7ue0RhmzdX5OSdYltiwDc=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 3
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/r3Q60JfhyOMwTSI8dc4BP9nTNwbyMEBi5XSGK56-7cT09CZUwVX_g1-fq5pTQ5ghrsA_lzwsGQ0Z0MiwqLLbgs1Mu5v3uh0LOzMvK26QJJlcMa4sIQCn6QzTnwUr6CbiCxktDzbnVatShJFja76nqlTQTpapN64vvVjkaUZXOr8i4zRszznMXykm0ZtY0rjAJdUJl5s6ETBkOoiqBRwH408UUqC3bmHx6YoWqlkuHkvK2NzgaEB9Sk4LIH1UARKcxKAF66d1jJdn3VC3A4LUwmOB5tvhiFTqknpgAublvhDAI_XqX2NELxShNxe3fmVeXyixlBUHaqnwa1C6ZXKb2hJcio51q6p7R_n6sfAuvU5CiGAne8UvusW2aTVgLYoY3kL2lGzYw11dBOXr_8Bnqwzn3oOVYzJJQ3OVvHBMOquCkYjN9yJtoQjg09uC_Vjy7gagJxd6XDfJ7HKKobygO85vLDArLiTQuZKyHzktFaMQhrx_zROIiiemxc7VQhqWdA0DbheGGit7nx3QQ_1jCwVdRpQVXig0Ozpmj3A2n5QnqbCkGuadjTPoTXWVCWK95dIpyEqt4glGbjcZsVLbt1QoGgm6E56FwsIYNrI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook4" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 4
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Vh61GbJ0bo6dXywMio5zYcbzmqPvfb-oKdNeCVcHGtcbA6p_CW8dupmfQuimF0yxTV4-p21NUB4THD6zlAfuruYhJAQ9ujt4oWgrPHZvxI-hQBWAoAMuosneyAjcLb0xTwANQ5g0FdXXmw0AboAObn6HzxKVNH9LOD8xGdHEfQ4zQfYxszY9e3pKXB1Kg03s5R0MansUG1wfFLVMjiYMUmNjrYbQbdmZMaqPzzruyZPnreT5eytBYqL74uUBOZwFA1Cihckm4-X2gv6mU_8H7LxCiQ23LA3OmmjWzWIG4HqlC3hScPmpVgwpKH82xctwP3pSjN1eWh_d1pyQax6G9GlSDZdE8RFxQpPBh7iLm5EXAVbNaY-ci58fU_EP7W-cfg9xDX3DXePyH_Pnp14KE2pTiTILQKSligQdXXD9zAKc6ThATuK35YqIuPvPVMZoEgZ8r9JbOx22RKcABTD2fCHjoIhqph0XS-XkjbH2ywmI8pw-PurJS5HF1gEeDPFntD_qdzmBUbo9741pGVqSGs14IuVMA8OyXLr2QErXVGxf_lmbQ_bH7b_QwxE5wEA5T-Ad3HG3RMQrtF8_2ivrqIwc5hBkB5GRg4MLghk=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook5" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 5
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/uN3jS6ZBfe0QCX1mCf4A8C_p9Xk4RMeGruoMdqXtlxeRCpqq97zl7MzDgTn8eYyj6Y2C32ZKI68LMu4wXcBEIstQywm0OWnp8JMUM6bi1jFxmxA_aO-Tn588iNTD_vO5zUiWA3SAuTDvBbKE64SnHN9aLjyCS89rs2eLVQGo0UMArQCYy6dGd80RsxwDDi03ZAht3V7m4n2tJ_IoNuj9Bkt-UPz9WpL6w9ttxp_nEZnPaQoMLEG6uw-1ZY9RioKysz1ryGfY68A2XgU60NPYgBT9kJtxzQjXDbhAjtG11ksAenFbXF-3lWluu0Lj0MsfEDRI1pkJtRkl8lkNiAf-tP_X4m-knGi02H8jehvxvQ7D3-Ao2l771boHWoABGU8qEMAvhNbhWfA27v8e_UuGMCWaM_v8ueH6imzCRGwEesjk3XClt_yZC3fqFkrLXLsy0tnO9zvWO2VNc1e8hvwmCRtAScZdfUA_0koQzpYSB4PbnS8-xDFe-WLHmX7YL57FsV4XDMN2CBjQqeNBEruS0rkAEzIY1j7BIsHI87rZi506vtgkYC1GLhANISeo6C1RmyGs3GmWVz9Q5_DxQXhiyCR8HBOha4ZLXxgTTwA=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook6" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 6
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/WPHif6tDoN-0fW1sQwbC5YqNebQ85Vrhi3wwfTBi7KjYwET-rHliw99zoiA30y83WM3a6RCwSzhjvQ5qG-11tdQz7l-vmaRf1pz0gbiO8YHNqHTj2Q0u0LMUuN0hHa1XbGDhEfymlAU8liKorUWSWUMO6iPlsrYygPIrEi0GQmhhFVnOhePA3OLCn349_miz4QrZAtsxxf-_tONCqmbtr_NqATzk1rFD8IXbHNamS427AWCfcVgrhJLTrU9eiCKAWFv5xNzEHkTWVwgJfhoWleGQDP8m-GLk8gHzMElwQVmzaYK1Qbcjfba0eeIMZSbNIFWq6QxAO9qFEbxjHvRhH-oVWMM5WC_pIkPbVqiYiDdb7V9DknJB0ZgtczEs5NYPa25Kh8H9X0Ip8csgME8E7Wr33msCCwuVRtF8NNM4TZK1gNdMQaCVsmNcX-NMqUv9sLE_gA6pu--I6y0aaPhK35gMyzzXRqK0d1SDOsLeSVLYy6qtJTSalC_ZRMpK7oqO_7NALmHrJnwyI74jylJCXDnSzFvhxFQkZAAsUDEppL7IfEjg2-MUgritLtiG3kojVbdyi9IrM0ilVatYoG1L7lfJn6I-eD4TLcdX2_s=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook7" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 7
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/_lNQJM_bxszHFKutoZfylm7sVC_reWyvWSXpLWM3z0bv9ZmTTFFYNuqvfV-JoB2wlBnOuWRaP11Jd0y6ugLx6D9Vt6JKihtZjHbm3F6iPDdJhaNHPTYPLQKXk8AeN2uWtYd_mHOqNJfLQOPZljB1Qo9X7hjYyvx4Xo9AowjLV2TjgkzXy7p3muY_FKFWl1fqSSokZv4qEf5IHC8QloQSDBrw-cxfBtzxbEzGf3v7gMgwKngQ1l8Gpt7p5we5SHCpu-jRoR3tFp0FCccgwtQVAPOB0BBVrAmxlVjnZqCSE7D4l7FU4cHlUAb10MibNW-FJXNv44tkjoQ2_l6shVhSuPSBstZ57dIcp5PJBACJovqGIXGHuCcTlQHon2_6Utu79WVaObToWTxIj3LjmDbyMHRHhGE_k_Yn7_y1rHvgatFEobB9p89z480NpcCnwMZ6OtGM_3EVi4pKXRuAANWO4RQS1FvGoRXh-z95yEWlpL20ZHVk0KB-ZgeNte6729pkrvVdKm0GF-FQLatJTQsMEwy6hpRAoJ7v2FjK6XZMpEDA_0PX_2PYrGq2wyP8K8EJtU1PDehuuqxFgKoQo2VXYNRQg_8cTGCiq4Ku49E=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook8" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 8
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/wPW6Ek9AKUk9vmioWCMFBzMmo5DpOmF9O7NfpY1PzOeDVyYgUfnIZdwDjk9GUqudU1ZPTVumOZGcGvmcUXfH33bYXp2M5RnXhpc7qwnFrEAzN4PlV-8GdGyWgY4vdHzX4KxwfcbEhYtNAKXo5KtFtt6sniOBWgGgm-NdGuiCMAYMrvWeaU3ehwX8lDWO_ftVAUv18QpemwHm_0_0Cn2KpcP68nfn7vB8czdtXMNUjEa8iNd8t-lMKA4TIav-IgrqT8O56U6ldoBjK2axOFGNV9ONjt1WLN5ThXV-RK2FgJOL_5VCbBxRs0ox8wuKWJb9mFAvG6_cHJDM5kksLcm0O9FSDH3dk-a_RT7fy4CT7AADYGox3wRE8pBrKX20EDcU07mDe-4s58JVlQxqV1P77pr24kvKiBKIHoQr42YHANICExvEDPOiNSmINwtSfOfJDGpXyvL-TcMoaRXgJvOHMOT3pGJwWgrt9Zj5BsN8luj1lJwON029hIDTcp44WIMfCShPtVEWTDWa8U44rg8Y8zteenyxQpPJrMkE03p5eMtI4X2U3F_vfj9ItX_5QjlOzh77bzK44Z4QEjal3zx_aVzX7Fu064D7Bs2eoMU=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook9" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 9
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/yI6SH1Pqc3AH9veT82ow0-4KIqvd7STJV7X5iDn-DfcstKyPSKP6Cf3Dxi-yTRToF7FKLJQebhaD8HMeKJ8vRehGnuWNo33JfIPLnilBoVwwBNdvJhjNLCz5szq93R_HPXaunloIFRDS2pnKens9TdN_qxqIbNgIo9vmwnZ1d4XOsXUlbFFxwYbRPTxGsLSDL4eXVyAjUOdlKq0jjYHcEFdcNi74ggt70R3HGcTJJphZC7Vf0fZSxOwQnZD_nnPvJ7m9KZRieB31pBWCRBf3pRy__ygR59lQB9jBUzsNrvi3fwPvGFzU16wAJXLCrI76gHGLf0RLmm2NAzQb_QpTbwqlVbO0tnISiZEBiNh4RuHOpv70NOuA5Rx7YFiByigJfqL7mWA9_opNpYDYwvaDFcIEJLwEKjzI3ijwMwU_K6p_ToEZ0m3KwErFCjImz50aMm9-hVpLWLcCwQxJ_ohTh8qRHvgNuBSDrrOusbU-_b0__A2iUeXYYeuf7Ww3RA1G1aGzD5e3LbHJi4t9uK7qpLQJfD7mroNzyeYYm0St6Z39ECY-ixmHdv8c8mXWeiSI1ar52RXTNcD8Wy1HyupC6NSly-_TSeIWtBNUSnU=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook10" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 10
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/WVj3mkG4N1l-HR2ciMRqnxdV8jBV0E7LNIsGhrFYWVdz2dU_FXwP0e8JAIC_I4j2I7SkwVckStrUTxpAOXEznWjOwIFhqKvEa4KA6JWTTA_6sa80di_9_oTrmVnvyjP8dtlViNqSQhT8ldQ4cJSJed0ztZdvM4Hp733WI1kNl_2Ie3JZgOUBTYib3q-S9TFPYe0QGxLAd5or7vQlhKql4eY-K8QRKPC3Nm_02RrHFkpRlaGT7P5eZxXlK6ieOfTGgwcONJBvMCbfIEq5Qy_BvBXSvMEOKhmZek5Bsky7IeWYTUrNGQno-IVjOIuaErxZkmdnbbnY05JRx3w7P-dlUqvoxNzik7jU7wQ8IdtKT_2cAexeMcINMKvZzOiWmdacszxDjP8KWyCEcW8E6YTQDEXVF2RZtGRqrM5Q_Rbc2z5cZa7JSb50EBcsdFLm8wpY4OtEHnmNFXZA19W0vCkxSjNcTEa3GlAHNSGJ7cdTDOb24GQiRu818A5H6nvBnKSUOjwTCAewxPbZ-koei4TtHeK4oVtQvoB0JmRcxVIuWrIefKhUF87qiqzpPluw_sYjapFd6NjddB2Je-ZVhVLmZpCZfpKLT7NcavS49i8=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook11" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 11
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Xtb-fQcpCgoBg8-uY1JncNlb54zeGd2_CIvZt-2FkyZXA9RylUSWORYQOBQgRFXQ0f7nOGCSaSi63Ykfz52bICz9DeZjcpJOaS-GeurLBc-2ihwxwYjJvrDb59MQnLj5rZc3FLbYp6dFOcGTOiMzOOAcdrk7EteOYtolWQfn_Ps1PybTc1WQJZ_wW_klZ5bFuMW_g_44DxCagVuW1to7oreDZWo3UXULRfpaCufDM79meOA0ON1wbpMMrDRQU-fxGpBhCwHhuMaqTTiSpkYg-axQC79_Jowie9XQnbUST6ogI2vJBBC8xPA1iBvfCLQ-fL2CCJ3YmAd2ZjFlZglzQdu2sPOp--VPbzjiJyx95C-n0JFJiXGn_wUpJGK4vT_ydHnRPM5SDLCh6tm1vL2L-I0OshCYqX29JXTOZN-MVJrKSnGXoM5nLnDH6ISesIaR5RzyU7TN1ecCsSEEctzJw4McCX5QNbKhZgGoQI-m8gyBybpxNXzbAuPUzBIrJJH1QlF8oaow004vBCZBKPZkznJ7UYTQv6LN1r9Bs8gCrUp5mY92K239Ms7QIiHeOPV7pkCOL3fWPcNtXOVa4KNhNAFNfxVYAADdIdX8Scg=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook12" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 12
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/IlDYI3R9EMPiVbWXI4PEG4CLOYRfbam7dibe9lfHUtyCe901Wz3dLXSK4Q9hopx8HoZyp3s6oOg8EhTf-S_7GToAldyeMQQbpKB1rFxvOV6vgo__mikaBTLOqBiyxx-2vDc_K4m9uh4faCrsBwBI7ABaaJliQPnj5lCd5WJhbWxInMCe26vVZPldFs5qYM_u9NhqljxOhIBzIyfReCgUo4mrXguT4hTZTZ3PxpjciJTcHRJhKFBFcENCgYXZrquLgFs3p9ftnsIM4c3AI-1GPj_r6FT4hzB2tRSUanpQaFh79xhKV1G5hJIbu_PIyxS0RoRLD7rnMJxqzaWpw-RxmJNCgalY5wBZ-hsbwuXGQtGep4-9eeDDaMlaK0Ff3llG5xrPdXSRUQ3X9Jl8ge9fZzdzGCWM3qD1TUfMJi9RwNPDeQOxuskaFcrlu6y6ASvy2YpuSDrj1baO_KX35wiEx9qDAJLb1ql-gyspRYa3mNQmlNISGpdaq14cVIqKEcQZU_JGweSNoNTLumY8JdGwrzh5UzHy0y27UBTmjLG-G6Amx94p3AmkviQdgnr-XJVA1uT5t_UC1R7NIIBtL_nGpZC670kOVU5U7iPzQ4k=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook13" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 13
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/CI1TWD3FJi6KcgnBbignUiWeqW2lv_ID9aDi3fuP3QS24GdXiWlXHGuphUDpnSvwmj-xqrzkzaMt7eMWssYvjTyS_U28nPfHEq3_iValFduHmQj-KIgPCykykbYjMqeDlOL6m81Xnss9qOnb7wsxSNEfUN4YD-wzgoDRd1oFp6zfeScpD9-TRgqvWcWJiqeyzfu8RIfc_qCnpNHWnVFbBIdlp57AQWvM4O1zqCSVVBHEUQ9UU6jSNuJkEE9nn_4CLsMCfLY7QWA-_n3O_JNfPQsOZnge7FY_VnXDBOsPfDhOq5kwTQ9kyv-rTi-ZDNp3jTwN5RcfMgPOU95xTuB03ejck73bnvfpDjSfYqA8OO-2sn7aGtgIySv58YWEOn-Rra7xjy4F6QrJlxOy-r0fdbMua1_ZeTBN1vZlgN-lI5cVhNf9CRiyEKOo-t9AZUuIqPXd7q2B6AkNEACW3cxe6DYi-E8coJ10KT6QFtMWW7enfmsIvAK1g4DEYIABjcjnBMaWioNu2-ejsdQAogIb1IONlwoRHaaSa034He_ou95mINt9ApokdR5gym8ts4OvRdNME5tarEE-2v6SXH_9q0zUbUQzs-EJHk2HdLc=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook14" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 14
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/UTyjLlC2uVGGV9ASEuA7pa5cXR3XdPxS0bBpoghbUwuJBNLp6Tbk5HvwY2o4fFzgLiORbp5gRCHWf2pzVjUPvLVzcvl9MfrJvV-xe7RlohUW46a0dKTYcgne-hGEdXkp7edVFFda53Tvuf9DL1WTrI_kmpmDP_CVpx6OYKGQ1_QZ4jqO5tVUYbrWiJ5hQN4EOYfihVGrq1UeGbNhIpQKBczbvKMsQAYoiEZp6-PK0vrjUIlfvWLdMYCv4QtDQ0F98Y6gwwthKosMiHcFTn6n1h6BvbN8-ws-k8WZLReyWT8UzD7dtGIHt3FTieLteJZhPtx-huszHMRo6GLxwO_biFZVqud18kxNk_k9rgv0otW1xuQaIAf3eHG8qogB6CT5LW870ghuYcibocp7Rd22gGRX1QX5uagpuz_0lPX3mdRGyv3BGznW3pJY2mI2le88B2ZbwvopONyBqrX1ins2-us-47yluA8Z4yDcArffLn8TThqeXm4dWrQYP0NVQ_f54BG26X0hx8gJ7_a-omksxXw92Gw3qh6t4urSRTAN2QZaYo7NrXB8bCpTsLLxiw2qifnCbtZDeOv-8QrjlJQzduW93gpVu62VSmw-XVg=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook15" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 15
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/H_E3FRAeGB2Hi-8Yl36GF9w7XrCpXuk8m4Zf5L58-MFwxDzQjyXDmq3Gzis5lsALg11c3gK419GBySlqFWl5y5fd6MfObvuOOoYKdnf4QuXQfEtHO0HZb6v50ZO4mXeewk6MJV3GV3IbmUsPqdIXmFBommlM0uwdui5CKZNamFJ-hrQnm3ufCfRHzB5JN7QEFnkV2O7Zsx4ubyvoKOvthCrS7x36VlVrqDgweqpBtSRQBP6xH2aTLbQ_SlxDtErWGAzHNbcLoaN6DHEn5hkJRyL3BrPsRGCRCbcjlKeS7GSxU6FEw__i_XQ5WkYyp5E0H7HwzVaQWzZWXdE6hshT0SL413P_zaXqhy491v7LAL821H-9yyVMRyoB5Ls96NbtInwqxm2Ro9Q85DQjicDM-53oz5qaOvZr6ExJaoR3f4tuIjSUnxoNeRdGjpTtWIqSWpRVTaLLwrIrmYi5Rdc4MT74WU9HP4X-Tnm-irDMyrgOlYUcmUSeODCm4akxdyK3tKMI_CRzd4l3uj2KFPWhbVTWqHI80CHZjhC7-YHFqUwDT7mFsxS9OakxpD21PnaisppZvJ0RTNTEZ2lUVpq5G0Q6bU5paTBW9Ak9FXU=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook16" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 16
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/gvesKnJVGbrgRdoOjfVvIpCP7jk1DnpfbIGMvC4_ESDrwgr49YL_zMoeYWy8MoYxF69DY1oXOOm2tEel9HvQf05YORo8-gYzJB1uIQ0ArggCOVvnUB6eABRuineW4y7IYw2ZVg9s6YGo2ZTMtZxApPQKZQbpZfI4rISeM4pfBbJaoKZl1NVUrRgk-q2XMftdRvykqqcVb7xOwZDtz-tZbNDZ4iWRRFpeBce7LquFO6zUaniDfyOu4ITsYM9T1Zno7SCamEyzsfvQW2pX2Iqhgp71SJImCo6klBs-JcqpYZPSH079vSW5S2PnHy8sb6eaXFIQKXCVvILdXssoGaSCWw0Gxp7B0N_eamjYHMOHgaCcp-WTLsKMDLNGU9Yvzm0flYGqwp-Uob1xHUG8RVxSijrN-rxOpuWzm60SOPweO4QVfII-4G8qH6zOv7_FhQcMMpTm42u8cP7VB2Dk-s2CcmX4Qwa4bwV47ZeuytBk9rokmWhMd_SBJg_DC98cE0Aad1MjQ8aNrs5QZ_0GWxCIOY5Ugmf2H93v8hfMVkQ9M40DAG2Zzbe7-A-aPz7Ya-HCSy7zxsfgOEbOnltjjTUG185fGzPRSFWEa4E9isQ=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook17" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 17
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/RmzEHamv6o5VIgiYF93-xR7c_ITibrDNMYBjUpOSjkS2ueYEoo5-VuGqaXdRQVyqyW-0-liW71EuiH8sWGX4MAs6QhH7Bm1WcMEW-AKlTB5fBGO6oO9SPZ3Wb-ntFo-RC9YeBMsvZ8j4HuvWa0SaMkR-6cPk5_mtSBsz0BgJAR95Ow72S1qAQafj_sLMLn--lMybrn4j2wCw1Z9eNjQ5PAqYuIA3IyYRg1XaBuC7ynKjk7mOOa_m-dEjlPVbAe-3Z612ztXwllQkSYb_42GIXdD4msJr-PuOM2pCvKc3R0GRqax_0IebHo6FZAAhQnA_psT5D_X-gAoyixwb_-NFzZVl42GezQTfAQ2kind9Rtw_NsT4xOY7Uv9SBIjb2R_mArmEPE3nz2ml-kLj8-hfguJIKDAFY0kIIKZbkvAXQ1BZa3YXj1gUFdH2Q1cA0lbNekzklzebOgFHz3ZOFL5QtHGYKX4QdaZjjSlNBBgCx-13FSgDI_TjQGnPajOo0mTxfLRRcDL107eJRBJBYkA9pVK4iqTDYAnSsfBdXftEScmOns_KBynfhtPoow93hDOXpeTYK0OX9ohOkBQLVh3xEJmU0Y8-7NyW_bzqIoM=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook18" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 18
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Dxh_E0xF4BeGmbcN-haSUAbC0vFo6uzIRezwnrGDW63PBxRYLaDqvED59PZDP_aO8axEzu2PqLpvcOS8NWWUkn15CfeQHK8I8gL0ZWJJxAr9K1SPalYwQmSwgNi-B0VD98f9NSpxI1U8gOk19L8PaDIj3ghW3310guZ7je2XfbKBw_VxFNWlcpFEhtMOMFMabi0YfDkDTTedpy8eSYqy68mllUzAOzixwmkd1k2cWKeHuMyl1rODGYqAqsKBC2Kk_RPJch6AcVHAle9FjsKVtswrtevSpcEOVm8vtxYBRdCAuqUdJh4DJMe_-q0rP_XBU38sO2Mcwmol8HcpATVqPNUQouCMer7SRMnaINygRVBCMIPwLYkxOJG5hbGL9le0sKLov7sOydXYw6550pQbatJmnVCElnYYm8jhMe1EHNEyflf11DH4u_9_4b3vFY7qxvCk1sdQ2C3QPZo73MV_4akE8QTg4QJwiGOCXATOphHJzT0xq3r3ASCaEAEoXvafAdoagbnNgSdqBPfTZFqNBRDu8qvEiPzXmi5RkHz-1MDEW6cJRTD5eIhI5pogX28ijVvvqTB7j3F1SWVuxTE9UEcoO29up8tB3i_u7FQ=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook19" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 19
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/gmendSOcdEw24RcXwLJ8lCujXTL0UyyiArVmMEE-7lfzrQJ1kHDUq8fZrtRwqKPANKNnqE0dnLALcMvBvY7sZulnZ44VT-CTlmOqFsslZr8rK6ICIYGwz0e3AReIEQ7JLkMD79tgsKqUMNRVdUwaZbTgjZa9IcUL6Ar8yqR26e7c_vdNbwBE8sejYBZ_iGQQ7UZvv6XIcCrPg-K2ccEZ0KbfONXDtLf_qeCyTJLcDAEPPxUyW7_2obyllil6rqlg1gmJv0xlLNwBy1V08bCaQMmj0XT_gYHgsigt7qSoV6VFjd6f9IFH54YFozNXTP9X-gSxdARRRZSK6ZIl-UbOJU05eLLbgYyWkvmuUiBwex5hLrUZixhqDBEUu2m4l5RLQce6lOMbRnR4YX1MWx5MaXHAT5PZDGkSW6zxHx2zBOUN9z9bWtbjWr_Jec_fsCaGaAJjsRosNj3PgbNxi0YqORiLIe3UDG-jJQN2QBQyEbpHTlqmGIWSA3Oo9YPWX2JrbqHCgUyGf-TlYPRCuV4ynXn-kbqCggZW2hOSsruQhJg68IEqYrYMtpp-9DKuQ94UBEK_YR_CMxXw-HpenFeELr-J1LYFs08_9JyW3tI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook20" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 20
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/thdEaMNRypkOhmF9xMnRrtLhMxOX7eXy4_E4fj3p_EZa4_4VN8mW3vHkOwo5VLxE-nGfix-SAYuDJoqlrlebQFxfHjqshfaOleSFJj-xKN46ImdpIAwa_i1yHsZU2vZQ4hbjGjs44F4HG8W6M-PV0Q9uhwXUDjbXpvcUzI0bRs7aZhTpAT3GbT2-uALYULRpCQuKWRbpMru4vjlT5QrARgHOZtC7dOAbacxmO-OaFHgb4jp00Irz1jg1ixqRDEjdqaUNYUbO5qElPRbNO7IJI8S-Vsy1nk4NWp7mBc70dOfHs8U9Ub6GFXPVMT5wzxcPKlPcQ7FNqSPsGLjEzw-0kPtq5dazlDbNYx2mJG547VpTTVetS2s9n7ZM-16ZymAQF84Q0PlULlXT9jlcKNF70sSyB7CbEPo4_a1vlIP5jncWT-sfA_GdCQXQfXO6qwW1JKilUiPoieGwR1_WuqhCOr6JMaKrRRIGwsdeNS1_z1qj3px1zqkLVa4e3lpDNRfCYMIZWregCpZI8zhRiAFuCTZq0-U-IpVqMi7dsCZG1mHgZSeL3gBtq4aBhy4vAnVDzsQN6bVNUxQcDpggrY5R0gFQM2MmWJfrClTWGB8=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook21" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 21
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/Sk8oA2SK-ORaCREwd1FoAdmtKMUmleo3rTVxuED8TKf-weyR50eSgt_8s91lHMLDxRiwDkUMEfDEKmOSbfBwbRl2RE0jNcWv5Mj79ylHjvUs5fY9ObTERP2UJJ7R0KMwzVnpdhy-kqTXdmyZRk_KHyQA-8bNMb5DyPNI8vqTa9Pt-9sF1-veP3hEQmmGAX4pJ289b24UIpOEmr_k-Gb0_8nlc3iyVndFwE5UI0GgNwfAhDgt5Re382MT_ovnqxnwtVzegeF66YqLaZIo6gh7xF-4zXVL3Alwct3dTenD32jWZb-jinnIVBxjyykSoo5DTc8Kvf8fu3Uia-2-Ns8NuJ7CNDCLFYBpNX-pV8GyRNxUWtrjMi3L3qt768m8xjw4Wp72e_SzU7fhHxOmjCMvaWokNGXMemP9Zj0ZkMFmob5Q9GgeBasMtXaDhnjP8PCG5qolMmYDYIf7U1jYRfPW-3Yj1tYSVycPLFbjRLpTS5E9ZX_9E0ig5ajl9btq_ESTejpflOWcQiwx0Mvr3aEhUL58Q8utiIlhRxMUAW6tfKsYIB5ArxgE_l6-oL_nRhtFvoIg8gWo_Ur9XF4jaenujlCYuzwUy8qlkUwGhrQ=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook22" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 22
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/fMAK8fLpvs1Uvc6mmn7wpKsa3Q4gYhyddur63XVd8qe2UKmameYfl32XOaaiKI2asukriCI0_oCfkgHFKPx2X04XFI6xl-CoUAn4TfTl9cvPuPAaCwXI14IvXfeEWJR96PHN2dj6YgwoYoESiRvWCjoNxMA2SxxrtdBBWhB6QEVw6S-Il1CB2GolkZ2yEPPrLzZ_0-iE8WVv0nvIPbBlGsQ936LttxYsuj8OTjWX1AbnpNugGFhqg8l7IM9Q3AP-qG9GPITDJ-G-aocuwHe3OiMvKt_sAlaKieojdalBkcuBMRgUbf0RoUbK7GsqYKDeOFLTzeHaunbF9MLtINfQEGmlioCI0EqBNt9Pj2pEuEn3jZodqXBBRKgWrxyZgKb4o_JuXH4fXYxJs3q0vm32TTIrs90lHuHOTtvOQl2GVYRabVts-EROghHx76KMwNqgII-shHIb3ZEHcj6iPuSyKZYwEYpStxe2jHQ6iuSC3X6n1rXJslOInYIAa0eDEB1GVGx0PriYQmVatjAVibH46NkbJ-wKvtOEdrhT11csye9H8O5yj0fkVLUmgTD4NECrPAlXIh_9nhNLT2503X4aGniXKvZriyy-A1VeRv8=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook23" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 23
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/BFr67c8bTxkmYLJVLtaOQa0P4fOFti-V_W-TSeAs5zManifZ5b_tJzDVLxz2HMiv3x8qI3zhMnmd_DmQ4rEGHSHVO38roMz9NhUu3u5Is3ATzWXfL-VOxebR73GtlY4qt4jJGmlFrkY6M-30AAx4ZsDUMV1Sc_aeq-MgXQj36DIa9nQSgOU8JNPO8CnYgH09S6kG9EUHXzQ9NOCxzBzI9KiFovCBzeXn35EfrRrXaITi9IMbY7s5_NIXJ_w_Vd3oblP9QIiZpGnFKQjbU4393bk43SusAutBmK0V_VBOnht_xJh04sn8tgsyDN108DgFNsSadZUUGPK2c7pt3jxcySdo4H9Q4-VPbKnSpmCtqehP0WY0U2xEM1twvYu0HL1K4sVujpUv-1sYiw3WvseziHLFdYRcGKQz0fwIzrlG3d_LDw_eHqVJb1GJMUyTV-D_T5rfuzATAjkB2ndW5LwJjGMUNF49GImi06tmvaDEYNHh5W-LJdFwSMAKnctzPOQnfjrLm4zvrHoF9OhErNsFUR7z6QQO6ghdRfBHFHKbuNz3a3BbnPfidoa2AHLenQGksMkDqRSmmNR9o5eUU1DAy3Wi4SGbznwMCFkiNJY=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook24" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 24
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/az461e-WCuDFXAY89FKGW_rJF1w3NYZ_EhKrdaB95UbwlMxFgyUW2Z7qTCHu_FKaiSo7QUCJTvVZyII6V4kha19fShKl1-eysBtnhPYPIRKMpNgmGunzhk6Ck6thWSf0jmB-AVAZsSf_CbYKgfzS-n8YAUai4HxSoAPXPA5Ski3BY-YfzcfAQ6q42DOF17obiNzBm_1pZpZL_pgt3vQS1RBMKz52K8xnEYXK627JzEy36K3MOr1EYcbF7SHZY38Ck6E78L9VNZflwPCIVvRkmGs5GS0xgXWN1ypaC9ZlouKjnD8tGTcgZ45CJXx6AmLfJf9d3-lqebZFry4Xx-uZ8nn3aC8Cht94o5uOlil5BlkPkC9XH2gi4eqtPl6Hvy6kSkUX_sFecxEkeBhqs4YchoT4gu1sqMluSk9xFAbflnO8zH0AW0Tj7TJTwy_02S-Z22MPPjaXZj0oZyAr1PrJ5GUC5ixQ9SSvEJQxUeLEMICN2YI_gG5xy232v6PHERjBT20F6_xah9hVW2Ue7qwd6qOgPXiIsurnyNmY_tCzfGivkXO5QCoYNSpn7SBhTMKEIyDlBoLT9t-b0H8s2L3EaUPLZUtWP4cf7ZETLKA=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook25" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 25
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/G8t1Pemj-f6OTj1cgyDw5kBnJ-OAda8vZH6zFHeRKMA-prBlvwxQet_96jTVGYmoCnjE4j98kF66atiZHwNjKJ82-q52ZYfPkNGGOtmZg2HfiIrSH_DwuZycaI0tly3fPSCgHCsB02cSXnaskT9GwF4-PHeVa-9uXE3ITcqaAoR7uZo4xzE9nxNfwuejcY-orgVDFauIRzYYTE6GlXJSVkkX5nXbr8z9ByWEz7CnwzvJwRqWX3HyOlZjPcuV5c4gBNwSK8DaW8EtoW2V4t4pc1MqbiBOvznaYNqlFV9qwsy5PZypxHzSwKZl4ZS2NZGEhcQSiiWlQCq2B8Q4RMn7mV5jYjGdIQtQNYXazi2u8UTxrhPBCpiHJm6BMlch99K1eFy2lJ6NdA0EEEjCQappoV4bvrT1riGkZ-m5EeOB7Aji5gGj86T36JaqmEQaAcMJwzqV-sBvZvpyMYbabM8RLbQJG0JDZVp0a7VZugolWDVSA7b4kbTRBwwzB1RJnWLbd-Lbyp5woMboVouo5DZTzKL5ZqzcW1k2Fr16UE8m3u-FDxxit8qn-sQWuA73KdCQyE3uAElyPQXEKuyZqevJevlHYp8Z39yWJr20Hdg=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook26" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 26
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/QbwdbrAz0c2pFyNHjoc5p-aqmnvmg7VL0HYCTce7twqiwWEcQYtCzFspL9M0pRA8NHIoIEgnEFUUNm5rl2FxYloaHfJO28p6QyzZ_xSO2hhMtfHZYh0h3tMcvewGPlXmjvgzOYGJrClzs_SDTzqqovfpi9gxe0KUhxZ8n6Ujz5F_SmT-dSdllrvaaqGFYo04frFapsSe4Wb1UYYnxfqEQ0pMfdGRS8UWHnz1Is75GBydqm1YcDH-xFHGeZ07DwK6vcWK70nGy6clKW5nFA9KYRfB07nsYCWCQpx1lfT8KqGptIFcOUUIzYcJt5rSJkmWli2fdfOsmrw-WySZPAGGQwFWCyOuZKT9V4LkwxgWYuQTnPozfgRRHLrscaHz-Fr57QD5TfXTBzKAqTy-K0FxTH0K5mpTm0G4biJsjddGbScSFv1a1IFQ4o3nvrV7eEzBp_nruGjr2IN37UK84lAg6MlgqusuGzeF8tpCEwsI__XQvgEJlJ42cOu2gsrunbqafVJiSVCC1RvEvq_zuOCFxDdV3FBkGduHCHeFNhmGOKiDYVyb6cioNbj73f78X5d3SoTPcf2l_4eeUif5n49ztymZ8V3OUhUJjqViS90=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook27" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 27
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/nBB42sru12_OJThxzs4Y4DO54C8sqO8HQsfb-glbvMtUi-fGLZzCaOyrivqyNDB07Nxsx18FlXUeF6gjbucSu629RcIoI80oa1eRN1NQFrphRTFEffZwONB5lvo1tEFwJ7QVTakMvqMjW7DKK13pAORvFT5JBDMlnnVX8BTS5iVriCd_MAlUQriKNn6D8fzkCzm3laxqp81kCb4oUn6XiRaCqsZmgUpaAaOZh48Geh95p53VsUV73pA_tr-ifyuQ0TdJe-XQY74AhY3_h1-ooGoZ0QGJBKAsjqVaWCLuObeYU4tJlfPX4WMDucNAjz6L2GU8l3UI-LVl_ytefmlb_CgK8aJrYOAKt7tenqkQYIYBllBruLCG6pnLgzrrXiyQw0C4drVI3PXxT8lp4zhqwpiA4k7mytX73F7Qv8Vqz5MZ5v5PyWrmyM7Rs8zObzDPxgxcS96DW1HT8Ea5fZdv2Vc4404FIuRrLLWB8-pWLYd62r5FN3an-ka9F8fgyB7vTX5TxFWshD7HEFHoufcYojsiCcKhbd4j0DXy1WplT978_224-ePAHcgtwak8gjg21wep67RP6wBAB7U9MNzIfUHIYSmGsA_sNpezh-Y=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook28" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 28
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/yv3IZ8_AOAUgo40diDtVxk_EfWcJ6d4a-he4wbdPKgcynN_fbdMjclI-uEhM61yHB9IFaBzoMhyqRO2MRjzsynap3f8c6xXC1wqCd79rnjEHMrJQxJfcH7XA-hzzZkFUNkYK3T9oGNDM1L-3jigYU9dl6hz_03StBvSMpLaG24Jcp14c_UCM6HHLGpAQ1M0_AQ-92Gv338_ZfOI7j11jMt3oJ5twcEj9fXHocEdHAZe6LN7h6bbU7QqlgfH9Sj9jNL5eg_KLM2FFyN8zDPe6h7Kl8YWd-nftvo3Nm1CXW3R0DSMqJB5VQNcURD87gZMcwsegXiOcYpTrGCY4ptDalBnFHLAZeNKOombLEmshYQ6PrnFW9Nh-MeZ3Y1Ko7B4dD7MlqJM4fUhaWghXrDJkVzK3FyufjhvXLcqxjthmyN41pUuuXjZ_tLRHr39ARAJAn-yWhnTgS5ejHjuk45-Juz8Yz2fW0CqQZke0wwBQo_huYUA0q5qTapN2IFl-BbwFVwmTOmgdHeJuv5k5wh6h7avd9UXyEoH1RqemJaiem_wLC3AcqgRwsSZAKcUGz56USrroqLKZugO5KYoTpexzYDjDV-As7Gq72g1pk8U=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook29" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 29
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/ZMiHUO5BS2fYv8vAGcCngf_Ri7P9k9k_9qgtcl0ZqmbBBI_WR0ob8TDHD27MbksOHfgdOyPGZxldsvaW9amdvMRi8Wm9LPrm4zIeCQ1mEpzqoGjxd9YSisxfKYzUJMhGpQhT6nhPaAOnQiTb6TazJ_2kp2BHIIvgerdJ0xtR0QSUAWU5QAAoq9XivyWHMWaSaNE9g2IPQ7hT8QCUjPcu8pxgd4I4j0WyPk2EaDfQEU9O55VUDAHGoihjwn-K8Pernn0sKeMc3Tvoq9A6Vbma8-4VNPiJUq8OiFw5LZL1JM50pChQ8i99EPuryZDjTP4u_DDPz-TopIIDfuXsc9fNT7GeYj0S25aH1WJKJ2LPsYjA9uC75FMpUepEUmxGOoHisETq8gNqTzuPLNXd0jnywhsM2Pq3cFfbxyxkRtVhCygpNEguaUJDOrKSxtYrv5ahYq0H2aoSJYqI273NZTofayGx1L9k3zC8bvxN5bItYDtXJILl11S667RrzE8mIP84mc94JrkJ47na3k__fjisEQzRIUYsPSpopqRWAUlQDf6bajS69dBJCC2I-Ei5x_zpYIi-GpQPBW0LiVVqL_c24nLOm-1VjukXkzesK0w=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook30" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 30
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/GcANZ9grWE4bIpMIYu6nyhoqDGZ4U-YYl8kKqb0WLyjuGJna1nNKyiqxIYW_iyoGRDGfoZI5cddWMRBxH9HqJYPUgnlgISXT05-adjY2dC0l8ZBxgpFel73B6WGtm19y6cDesidL93ojVIK55Qd6_xbg-cJVibsnAbm7SuTh06cF_hwj5FPTF4oVzMPE0XJdqviUKTbTQaqYHqWYawb-rEdB8IZtP2YNo-fBlWNE3_Aqls8YJTRfVD2Y6HoUQY-Mkzmbpy_inQJrUMC0jpkVyE5mOq3-FS2JkMA-dT2wOKU91zGiV_tv0NHaRW7YErTHzVowwOukhBz2fGFQSQn6F9XxLYkS6kZxuR2V9jLsH-FxeQ6dVPwjUlSznFiOH9y-GSL24fDZzgQpnfkGqd8ZOyGI3aP9vOHO0NJLgu9rG_MpqfL2xUPfvmXK9a9wfFw79OxC2P9Vrd0SG9szKbuHzrympHMYfL8UwKIPDjU4W2Tos4KXZk_KuiiioTyPga2AzJMhcXIYSfzNJaZGpLkKxs5bcuEOqEPz5B080TktPQv-5MCAEvxM2B6hCXMB_7jBQbH7XyAsmGVOxmqOO9p3Q9HVcCfqmvQgSq5Dk08=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        
            <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook31" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 31
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/21ZII6m-ODjKThj3Bg9v56DrQYgq8GeqKQrKuEGZ9d-1a3xwstgXffgIkuY4znL_UpmEO3g35yQDVyj6AZoHuDuSBxcGtNQFCrNEOTs2tt6FnWPa4HtL6pq1OIkHYEx1t1Mwo-UHKqFggk8Ju5qmB91enU37EX1LTgVuvhWIs2U_pVQNpTVPswQE5BiGKsaQo3mMi3iFZ2LFlRSLu1f9rj8X34EnYm5quwyzBTdTJEZEXTvQi84TsLPTaltHjg6tAbLA7HDcnGYT8Y5mv9TM9853V9JRj90eoc0y39MtgKWF-t1MSIcebxLJAiABVKKhFQGt5Y16ZJfmeVU67w8Bn2gagGroskEXdkR8GzVbEC1Cn9gx-PvlXQw52t9gv5l10UHzmlvnBXSCxLwy28F1RqKmZ17nIxbRSFJlASgFYkl6-OaPIquLDlpWNKZN6NqeEAS8CD6EePo_cudtAwtkB33RywgTeQveKeFRSeztRsMEygiYrGg-gTHKlUOntrvoEzJAduDDBnqBFC4t7uvAYthpm1LKW4-ewkm8QoVMgXTtyFlmpyvh3zzc0oXXclUEEFb8N3IdYfOxE_kG_N3MfmV5zdSGM4smvU5bqHI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook32" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 32
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/nlu_K0Xs5WxixCDaUAYm_-8XXqQ_33GAXkCdNk68-tl0_mYt_OK-GMW2XArh6waPfR6r7716sxpFLSLn0YK-EVyBAioLuyhGm2S5g7rXwNbZyK4TH4QqA1p6i6pygzXPIFolQPKRtXP7rZhmtADGWmxpnSRBwGjMcx2qJdNkqUvUzWNlE1FzEtKJMJeF2Fr6zGXAj_uswZwLzUlWJtP0mlIf0fnXq9y9miehbZm4yEb0OpaGFkB2vFLV8p35jUieHSmx5kICsTjiM-Af9zmlgnPXxmhJb77qjNzRDHJ7m1v8J3o-IcM7w8RcCTTW7_l0IYDcAnEvzRzyTZybavEVvq4BusgZy2SuoS-4FK6RCTcOgXHGywqPK2EutuRJBN4aO1CZ2i40LS-rBeZsrfm1x7rGsMKiS6-aAZIrXNQs8T-bm1hUvmc-eLIHRLqpKnp5HCz_yo5V0Yn-G6hG3K2nKSde3d6sEfDWjGuoHvsRugBrpb4kpJy0jd4F3oqEcgdHeOiQQSknWC4E_Lvf3AWCjCgFXTR2DhR6m6NMz8lgWSo4EyBuGAbbn6dpN_pDhGocSrCKTTImuNjR0tJBiilTfGPQpZI8QvW-554BNeM=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook33" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 33
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/zno3zQYNQcpV36GGfJH9wP2X7tl5ccYsJgWdusw-dA4At-jn26AmFJ1oP_3hDddwSL2OY1BMb-Iu8xBAgg9JDrH6LzH3kULsOVQoIFPa4T6qKGhrxPBkKZaMpbZSxFg5GXbKarGiYal_SQhRZUci_NiSbL-qJyc00TQ7slGtmxd5EDwPDb40iLKnCazV-hxcQpDqi0pbxvzIkjpAyQvxqQRr7RrVFgggP8GbddVUNnkvn3nEQNYMPJCqpeqU1HJzWdlVWP4i1a3nwC9toiPjyxXc4tw8C-zo-S1rv9yt_2RUB2AgNBKQJ3UBygFGYcut5GhJBCoL9XS6xwsY95pgQPxd0cPZARsYRdfeXpGRmTPbZx7wBpIbMHiH9KlNQege2xEMXS7zap1VYlqn7vjWCmfC0aT6qauB8HR0hx2xYh2fp-et0zZ46xngPSTqOiegOSG3a2dR7tpi-OOvYyoowPbtlVFGo8MmGwdOyyUI6rEe6awHqJkXHhh_HEu_Z3yCd8dvO_HxFovK5tXnJgkqAyx2Fxzc-xaZL04-QfGikmOqORz8D4WsRqok722PqB7Iq049q5hH1Q-xiAOxGgSk-cW-i0Uu5OklVfBVDzA=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
            <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook34" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 34
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/kSq9MPZMYQfiW_AQ7wa3HOR-6Sr_gfuHj-Ja3KebGRnsVCaRyF5TOHbc46oFjFMB-PTQ9fPDJQyR7ZsOWcpngRw6z3e-soEzzyDzABQCYeP9IChzy58x6g5AD8rKRxjeSZ-Zx5VO-H2zy_PAu9Epzd6OEAkOa7Jg6P3yvaBUn1DA91m6NLPuAEIu8QKiZe_eA3m6e5by9bBiU18uFQCyiBENpXJ8VDimqYhGVt7f8rHQs3qVM8VHKpNSimxbY2FzKczDH_pFZMvuCD9mqUBNbP6MIqHLXHJo-6DMXQamUaO0TtY5ZmG9a8iUwrLPdhtSeVpeKNgj4END9q5sga9cjUcWeJ6TFWZinf9JqeFC71-ql5Gjp3ydX2RUYL73P2q8SNZO0TTAUUJYJt83ZWH-QrekOGNn3weWsYqCOti-3A1yoaY30mWoXt2PJKgLkeLT4py34LP5f-xQkOOGXfFnijCLG68mC49qW_sxLRDFzGTlG8Two8eyj2PHkIY9H7I5mgvzNH5JzC8TorMnloB7xml1jy_MgDkq-om50vALn6EJ0ueDhsAOpKvgVPF_pn3mRp_QOa_DbgmcSEyA7ZAgGYPSCwQ3dRKtT6trAzU=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook35" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 35
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/62VYPUAYmivzTDjhk15fwP0c8mwhvYRmQxEE_g5bLtcrcjV2iU_q_fts5pQL_48Tyq7kGIpManyC9WvLdocdpZ080iYIrSX1XmQ4ug74Ou7T-LcUaj3WqSb8pvMgkNTMw38qe38zb1WHuultLcgz0g_CuCsmo6OImBrVaHARU1z2WJoxv_kDngx7JuyT7XUhrAsQamNGPhLGt7CFSiiPeDAOXOvMV5vo0g2UWhKCKzn4_u3x7RQEak3JLOPaU31pFyHk9mA5DzqzR8DY1Y4fHROPFrPF53YMOEplnE8l4coQK_YyJ5JEhwiTrWDhyBT_hcSykAHfKgrbyUDmBV0RoM_78wsANNexudnTAl4_Ab66pL7JcW3Vhn_oIMNiv327flaheWD8HvVhGiX3amd3NbebmHUN8c-U2BAPLpjWbbnXKeDFn8MNZFNUi4lJBzG7z1TzTg9rLwRE-owx-lgOquyPc6f44fi1SPtpP_HTqWhLFTP-BbwQgmjCFJbYSYeZJ-M5NMBfoRhfi-rU6tvhq2wnKOxT2M8BZwd2v-NvN0VLBMQfJbUgiyGeRuAlVVKffeB4QU36c9McWDXEEHph8i5btH6krq9q8_-0SPM=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook36" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 36
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/HkVxR5UXVxjtIWQGGlduXigHZW7BaZ-5lNw_KNuAToZ6o7Vvd2JPCjA5y763fMAXA10dXO144E6wKHm8ZDCoPXBjVW2RU9ZOHcKvF0TV5w1mEp7_C3czZDY8M0QgnwvgGp135POdmFeOmwqm4ZP3UKxU1KqAwIh5ZPwxeJqCytA2JImX1He9GttNIQhZTeYojemxT3AG91u4IpXUr-AsgbnPwVZW9RZQrg-JaIub_sn2at5RD1Lr1IqM-7NT2-ktSgAAaEtgJlVPPwuqq_vT_d1JgNdQXWNcof3qz9jCAQuBWjp9ba-hyXCVSer5HDOzmcdQO_Dj7A2reU80VqBss9neflT-zoWQpcUZDfSGcNZGzhf8xgpbXgJATDZXJQ3QRpizAydFGgT4JUI4XG0ekK3RZTbPaoidP6u01Ip7dKZoIyq6GerueJETQ0tIMNWTGhS6xPSooOk9R2rMs4Rk42X7_qD59ZgJx3lx5ba8GN-qcCTpcdUpiCFHWWnlNO54G3lS0QRzd6o8W7Gfundu3xvVu7Ibj1-M4FxmFPtuOJaCd_pIvn2VI-Vv8_mip1TuypgluuSNFhUBiGpw1l9LAN-gfi2rJ6gXju5cAZY=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
            <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook37" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 37
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/npwh4Y1hBWYAXQYE3-ERLFpdihf3td7AsGv-3zLDYpnVg192FKkxDKDOyp4xYhyn_28gbgjguvlum8IdLYPTQqZ0ebF-XpA1bPRQzuTA98jnKY9zRSw7J6HqfjG3dAJtIRZAxMS-u19T-_bdDsxn5YtId-D-aBs314zmLKeas3iT9RlAelDlnbtLDH1Tx8-Nh5NDXWk79GgGd-YRdh5enU9ftF-h8I13aZiB2dIWdiJuQ6tjx1ZjNmsJsdf9OAfUHf-Pc7roeOFq6s47LlBuJsTu6QW3IhnXrXwMr4yUECmHp8rKJkAljHcBk8bTp96dTFRw_RdIz0NWxORM_Z23KuopcS-NPiJuXh64UtRJUj2uD5x9xoxSbu790IMBlCG634tkbMtUxETzXROPTAfJcV75mN7Iv5AVo01F4VEL8_Mn3G54JTeFya85WSfz5trA4HUOnN5d4uZvGC-IQiJD21LlOR4CmXzhjCHKUL5liYZmYHwEA_dX1Gsuu_6T173aBCx4Kl7Uu6-fPjhgjUNQbJgGZcSSzuCJJn0MOoM8F_d5P_v6UgFKFwOGb1rBfmPyrNKkMim5wpbg8iYDAYRPgwabfWMRaM5ngX3i3es=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.042/Textbook38" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Textbook Notes 38
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/9mQUSyRcOnC1aux7762q8kl6ZbKYiL6_weO5c6rcseUme2_eeDZ6GGuY7za617Y-WaRJF9yJDXHGV47rCg4dUcbmwLUYcm1mcrtcsZ1nKVzhBL-3mnrF5-3sKvrznBNOgmELY4JScvfT5rVQf-ec3B5bDDhwKPkx-olTxZb5-WNCUuGRa3yAWODOOF_W3l229nb_B0dSJbBqb2noaxymw6kMpeA2p0pguVH7knQhBl2OakvvjzS3L5P1O5yucGR3QgB_1DFfw9uPZ-g0ZzU741uhJ3L2cXNi7ZIRx7OaNU1ubgVsi9b-8EWgCpKw4n_aU2B3CcnCMtfB_bXXIfD3ufRAVwjoJWZmFeIfsZBPGixvKeBU_EnmhySldfeAXI5zQSzFFNp1hpuVcu2G6XXHeGbNDbK6Lev_MMs4xAgQ_RdcO5kto6eCt8yyMpQARxdoEEJRohhPBmWwz4naqrLQqNQ7-aXmZHG1kkjiR7k6qz_YCpreqYnO3FXVETMx1mM3-ib9kGl0yCd1AGMJg4YRdtcqh9l6sqX9U7fYKTCtepXaWN5EENHtxPSDoo4dKUeG3CcbGdM3AcuOeWFEEdL5M13ZAeRH7tkN-wY5CWA=w1315-h1700-no"/>
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
