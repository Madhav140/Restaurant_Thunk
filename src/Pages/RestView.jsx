import React from 'react'
import { Row , Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../Components/RestReview';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchrestaurant } from '../redux/restaurantSlice';



function RestView() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
   useEffect(()=>{
    //to update the value in state by using thunk api call
dispatch(fetchrestaurant())   },[])

  const {id} = useParams()

    console.log(id);

    const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
    const restaurant = allrestaurant.find(item=>item.id==id)
    console.log(restaurant);

  return (
    <>
    <Row className='p-5' >
        <Col md={4}>
            <img height={'500px'} src={restaurant.photograph} alt="" />
        </Col>
        <Col md={8}>
            <hr />
            <h3 className='text-center'><span className='text-warning'>RESTAURANT</span> DETAILS</h3>
            <hr />

            <ListGroup>
      <ListGroup.Item className='p-5 text-center'>{restaurant.name}</ListGroup.Item>
      <ListGroup.Item>Neighbourhood : {restaurant.neighborhood} </ListGroup.Item>
      <ListGroup.Item>Cuisine Type : {restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address : {restaurant.address}</ListGroup.Item>
      
          <ListGroup.Item className='p-4 text-center'> 
          <button onClick={handleShow} className='btn btn-warning ms-5 me-2'>Operating Hours</button>
          <RestReview resto={restaurant.reviews}/>
           </ListGroup.Item >
      

    </ListGroup>

        </Col>

    </Row>

   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title  className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday : {restaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {restaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {restaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {restaurant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {restaurant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {restaurant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {restaurant.operating_hours.Sunday}</ListGroup.Item>

    </ListGroup>

        </Modal.Body>

      </Modal>

    </>
  )
}

export default RestView