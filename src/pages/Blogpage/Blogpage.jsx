import React from 'react'
import { Col, Row, Image } from 'antd';

export const Blogpage = () => {
  return (
    <section>
    <Row>
    <Col span={24}>
      <div className=' text-center' style={{marginTop:"47px",}}>
        <h2 style={{fontFamily:'UVN Bai Sau', fontSize: '31px',fontWeight:'700', }}>TIN TỨC</h2>
        <p style={{margin:'0px 0px 7px',lineHeight:'25.6px',fontFamily:'Roboto'}}>
          <Image src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-Didver1.webp" margin="0px 469.5px" color="#fff" width="275" height="41"/>
        </p>
      </div>
    </Col>
  </Row>
  </section>
  )
}
