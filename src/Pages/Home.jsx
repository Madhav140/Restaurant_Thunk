import React, { useEffect } from 'react'
import { Row , Col} from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrestaurant } from '../redux/restaurantSlice'

function Home() {
  
      //accessing the state
      const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
      console.log(allrestaurant);

  const dispatch = useDispatch()
   useEffect(()=>{
    //to update the value in state by using thunk api call
    dispatch(fetchrestaurant())
   },[])

  return (
    <Row>
       { allrestaurant.length>0?
       allrestaurant.map((item)=>(
       <Col sm={6} md={4} className='px-5 py-3'>
         <RestCard restaurant={item}/>
        </Col>)):
        <p className='text-danger fw-bolder'>Nothing to display</p>
        }
       
    </Row>
  )
}

export default Home