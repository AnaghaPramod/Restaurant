import React from 'react'
import { useState, useEffect } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restlist() { 
    const [AllRestaurants,setAllRestaurants]=useState([])

    //fuction to call API to get data from restaurants.json

    const getRestaurants=async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
            // console.log(result); //array of data in console
            setAllRestaurants(result.restaurants) //(10)
            })
        })
    }
    console.log(AllRestaurants);

    useEffect( ()=>{
        getRestaurants()
    },[])
  return (
    <Row>
        {
            AllRestaurants.map((item)=>(
                <Restcard restaurant={item} />
                // <h1>{item.name}</h1>
            ))
        }
    </Row>
  )
}

export default Restlist