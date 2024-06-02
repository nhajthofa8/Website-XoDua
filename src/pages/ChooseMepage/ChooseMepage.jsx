import React from 'react'
import {Row,Col,Image} from 'antd'
const ChooseMepage = () => {
  return (
    <section>
    <div style={{ backgroundImage: 'url(https://sfarm.vn/wp-content/uploads/2021/12/banner08.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <div style={{backgroundColor:'rgba(9, 120, 41, 0.616)'}}>
      <Row>
        <Col span={24}>
          <div className=' text-center' style={{marginTop:"47px",}}>
            <h2 style={{fontFamily: 'UVN Bai Sau', fontSize: '31px', color: '#fff',fontWeight:'700',textAlign:'center' }}>VÌ SAO CHỌN SẢN PHẨM CỦA TÔI</h2>
            <p style={{margin:'0px 0px 7px',lineHeight:'25.6px',fontFamily:'Roboto',textAlign:'center' }}>
              <Image src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-Didver1.webp" margin="0px 469.5px" color="#fff" width="275" height="41"/>
            </p>
          </div>
        </Col>
      </Row>
    <Row style={{paddingLeft:'8%'}}>
    <Col >
		  <div style= {{width:'320px',flexBasis:'25%',padding:'0px 9.8px 19.6px',textAlign:'center',marginBottom:'50px'}}>
			  <div >
					<div style={{lineHeight:'25.6px',padding:'3.2px 0px 0px', display:'inline-block'}}>
						<Image width='80px'src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-11.webp" className="attachment-medium size-medium" alt="Icon 11" decoding="async" loading="lazy"/>			
			  </div>
			</div>
				<div  style={{color:'#fff'}}>							
                    <h3 style={{fontSize:'20px',fontWeight:'700',margin:'0px 0px 10px',textAlign:'center',lineHeight:'32px'}}>THƯƠNG HIỆU UY TÍN</h3>
                    <p style={{fontSize:'18px',textAlign:'justify', margin:'0px 0px 10px',fontFamily:'Roboto',lineHeight:'25.6px'}}>Hơn 10 năm hình thành và phát triển, ĐGT với thương hiệu SFARM ngày càng trở thành thương hiệu uy tín hàng đầu trong lĩnh vực cung cấp các sản phẩm vật tư theo hướng hữu cơ, sinh học cho nông nghiệp đô thị và nông nghiệp hữu cơ.</p>
		    </div>
    </div>
      </Col>
      <Col>
		  <div style= {{width:'320px',flexBasis:'25%',padding:'0px 9.8px 19.6px',textAlign:'center',marginBottom:'50px'}}>
			  <div >
					<div style={{lineHeight:'25.6px',padding:'3.2px 0px 0px', display:'inline-block'}}>
						<Image width='80px'src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-Phan-Bon1.webp" className="attachment-medium size-medium" alt="Icon 11" decoding="async" loading="lazy"/>			
			  </div>
			</div>
				<div  style={{color:'#fff'}}>							
                    <h3 style={{fontSize:'20px',fontWeight:'700',margin:'0px 0px 10px',textAlign:'center',lineHeight:'32px'}}>SẢN PHẨM HỮU CƠ</h3>
                    <p style={{fontSize:'18px',textAlign:'justify', margin:'0px 0px 10px',fontFamily:'Roboto',lineHeight:'25.6px'}}>Với mục tiêu góp phần ý nghĩa vào xây dựng lối sống xanh-sạch-an toàn, ĐGT cam kết mang đến những sản phẩm có nguồn gốc hữu cơ, sinh học chất lượng cao, an toàn với con người và thân thiện với môi trường.</p>
		    </div>
    </div>
      </Col>
      <Col>
		  <div style= {{width:'320px',flexBasis:'25%',padding:'0px 9.8px 19.6px',textAlign:'center',marginBottom:'50px'}}>
			  <div >
					<div style={{lineHeight:'25.6px',padding:'3.2px 0px 0px', display:'inline-block'}}>
						<Image width='80px'src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-Van-Chuyen1.webp" className="attachment-medium size-medium" alt="Icon 11" decoding="async" loading="lazy"/>			
			  </div>
			</div>
				<div  style={{color:'#fff'}}>							
                    <h3 style={{fontSize:'20px',fontWeight:'700',margin:'0px 0px 10px',textAlign:'center',lineHeight:'32px'}}> PHÂN PHỐI TOÀN QUỐC</h3>
                    <p style={{fontSize:'18px',textAlign:'justify', margin:'0px 0px 10px',fontFamily:'Roboto',lineHeight:'25.6px'}}>
                    Với hơn 1500 đại lý có mặt tại khắp các thành phố của 63 tỉnh thành cho trải nghiệm mua hàng của quý khách sẽ trở nên tiện lợi, nhanh chóng & dễ dàng.
                    </p>
		    </div>
    </div>
      </Col>
      <Col>
		  <div style= {{width:'320px',flexBasis:'25%',padding:'0px 9.8px 19.6px',textAlign:'center',marginBottom:'50px'}}>
			  <div >
					<div style={{lineHeight:'25.6px',padding:'3.2px 0px 0px', display:'inline-block'}}>
						<Image width='80px'src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-CSKH1.webp" className="attachment-medium size-medium" alt="Icon 11" decoding="async" loading="lazy"/>			
			  </div>
			</div>
				<div  style={{color:'#fff'}}>							
                    <h3 style={{fontSize:'20px',fontWeight:'700',margin:'0px 0px 10px',textAlign:'center',lineHeight:'32px'}}> TƯ VẤN NHIỆT TÌNH</h3>
                    <p style={{fontSize:'18px',textAlign:'justify', margin:'0px 0px 10px',fontFamily:'Roboto',lineHeight:'25.6px'}}>
                    Thông qua sự hỗ trợ nhiệt tình và xuyên suốt từ đội ngũ tư vấn viên là các kỹ sư chuyên ngành, ĐGT luôn mang đến cho quý khách hàng sự hỗ trợ nhiệt tình nhất.
                    </p>
                    </div>
    </div>
      </Col>
    </Row>
    </div>
    </div> 
  </section>
  )
}

export default ChooseMepage