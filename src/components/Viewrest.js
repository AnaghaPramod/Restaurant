import React from 'react'
import Restop from './Restop';
import {  useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restreview from './Restreview';



function Viewrest() {
 const [AllRestaurants,setAllRestaurants]=useState([])

const urlparams=useParams()
console.log(urlparams);  //{id:'3'}
console.log(urlparams.id);  

const getRestaurants=async()=>{
  await fetch('/restaurants.json')
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

const viewrest=AllRestaurants.find(item=>item.id==urlparams.id)
console.log(viewrest);


  return (
    <>
    {
      viewrest?(
        <Row className='m-3'>
          <Col className='ms-5' md={4}>
          <Image src={viewrest.photograph} fluid/>
          </Col>
          <Col>
          <ListGroup>
      <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
      <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
      <ListGroup.Item><h3>{viewrest.neighborhood}</h3></ListGroup.Item>
      <ListGroup.Item><h3>{viewrest.address}</h3></ListGroup.Item>
      <ListGroup.Item> <Restop operate={viewrest.operating_hours}/> </ListGroup.Item>
       <Restreview review={viewrest.reviews} /> 

    

    </ListGroup>
          </Col>
        </Row>
      ):'null'
    }
    </>
  )
}

export default Viewrest