import * as React from "react";
import CardList from "../components/CardList/CardList"
import { Col, Spin, Row } from "antd";
import InputSearch from '../components/InputSearch';
import "../App.css";
import 'antd/dist/reset.css';
import { fetchSuperHeroes } from "../slices/dataSlice";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { setLoading } from "../slices/uiSlice";

export default function Home () {
    const heroes = useSelector( state => state.data.superheroes, shallowEqual)
    const searchedHeroes = useSelector( state => state.data.filteredSuperheroes, shallowEqual)
    const valueInputSearch = useSelector( state => state.ui.valueInputSearch)
    const isLoading = useSelector( state => state.ui.loading)
    const dispatch = useDispatch()
  
    React.useEffect(() => {
      dispatch(setLoading(true))
      dispatch(fetchSuperHeroes())
      setTimeout(() => {
        dispatch(setLoading(false))
      }, 1000)
    },[dispatch])
  
    return (
      <Row>
        <Col span={4} offset={10} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/DC_Comics_logo.png" style={{ maxWidth: '100%'}}  alt="logo" />
        </Col>
        <Col span={8} offset={8}>
          <InputSearch />
        </Col>
        <Col xs={24}>

          {isLoading ? 
          <div style={{ width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Spin size="large" />
          </div>
          : <CardList heroes={heroes} searchedHeroes={searchedHeroes} valueInput={valueInputSearch}/>}
          
        </Col>
      </Row>
      )
}