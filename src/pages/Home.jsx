import * as React from "react";
import CardList from "../components/CardList";
import { Col, Spin } from "antd";
import InputSearch from '../components/InputSearch';
import "../App.css";
import 'antd/dist/reset.css';
import { fetchSuperHeroes } from "../slices/dataSlice";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

export default function Home () {
    const heroes = useSelector( state => state.data.superheroes, shallowEqual)
    const loading = false
    const dispatch = useDispatch()
  
    React.useEffect(() => {
      dispatch(fetchSuperHeroes())
      console.log(heroes)
    },[])
  
    return (
      <>
        <Col span={4} offset={10}>
          <img src="https://www.clipartmax.com/png/small/73-736454_super-heroes-i-look-up-to-respect-or-admire-superheroes-logo-worksheets.png"  alt="logo" />
        </Col>
        <Col span={8} offset={8}>
          <InputSearch />
        </Col>
        <Col >
          <CardList heroes={heroes} />
        </Col>
      </>
      )
}