import { useParams } from 'react-router-dom'
import { Col, Row } from 'antd/dist/antd'
import { shallowEqual, useSelector } from "react-redux";

export default function HeroDetails () {
    const { id } = useParams()
    const numericId = Number(id)
    const heroes = useSelector( state => state.data.superheroes, shallowEqual) || []
    const findingHero = heroes?.find(hero => hero.id === numericId)
    console.log(findingHero)

    return (
        <Row>
        <Col xs={24} sm={12} md={8} lg={6}>
          <img src={findingHero.imgUrl} alt="Superhero" style={{ maxWidth: '100%'}}/>
        </Col>
        <Col xs={24} sm={12} md={16} lg={18}>
          {findingHero.description}
        </Col>
      </Row>
    )

}