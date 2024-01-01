import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <>
     <Navbar className="bg-body bg-light " >
        <Container >
          <Navbar.Brand className='d-flex'>
         <div className='d-flex'>
              <i style={{color:"orange"}} class="fa-solid fa-burger fa-flip fa-2x me-1"></i>
                {' '}
               <h3> Food <span className='text-warning'>Circle</span></h3>
         </div>
        <div className='w-100 mt-2 ms-5'>
          <input type="text" className='form-control' placeholder='Search by Neighbourhood' onChange={(e)=>{dispatch(search(e.target.value))}} />
        </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header