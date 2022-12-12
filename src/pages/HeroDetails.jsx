import { useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Typography, Button, Tooltip } from 'antd';
import { Col, Row } from 'antd/dist/antd'
import { shallowEqual, useSelector } from "react-redux";

export default function HeroDetails () {
    const { id } = useParams()
    const numericId = Number(id)
    const heroes = useSelector( state => state.data.superheroes, shallowEqual) || []
    const findingHero = heroes?.find(hero => hero.id === numericId)
    console.log(findingHero)

    const { Title } = Typography;

    return (
    <Row gutter={[24,16]} style={{ padding: ' 1rem 3rem' }}>
      <Col xs={24}>
        <Tooltip title="Go back">
          <Button 
          type="primary" 
          shape="circle" 
          icon={<ArrowLeftOutlined/>} 
          size="large" 
          onClick = {() => window.history.back()}
          />
        </Tooltip>
      </Col>
        <Col xs={24} sm={12} md={8} lg={8}>
           <div style={{ backgroundImage: `url(${findingHero.imgUrl})`,
            backgroundPosition: 'center',
             width: '100%', 
             height: '85vh',
             backgroundSize: 'cover',  
             borderRadius: '8px',
             boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.5);'       
             }}>
           </div>
        </Col>
        <Col xs={24} sm={12} md={16} lg={16}>
         <div style={{ backgroundColor: '#D8D8D8', borderRadius:'8px', textAlign: 'center', padding:'1rem'  }}>
                <Title level={2}>{findingHero.name}</Title>
                <Title level={4}> {findingHero.comic}  | {findingHero.alterEgo}</Title>
                <p style={{ textAlign:'left', padding: '1rem 20%', fontSize:'14px', letterSpacing:'1px', lineHeight:'24px'  }}>{findingHero.description}</p>
         </div>
        </Col>
      </Row>
    )

}