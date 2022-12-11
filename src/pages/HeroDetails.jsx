import { useParams } from 'react-router-dom'
import { Layout, Col, Row } from 'antd/dist/antd'
import { shallowEqual, useSelector, useDispatch } from "react-redux";


const { Header, Content, Footer } = Layout


export default function HeroDetails () {
    const heroes = useSelector( state => state.data.superheroes, shallowEqual)

    console.log(heroes)

    const { id } = useParams()
    return (
        <Row>
            <Col span={12}>
                <h2>image from {id}</h2>
            </Col>
            <Col span={12}>
                <h2>Details {id}</h2>
            </Col>
        </Row>
    )

}