import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row , Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function RestCard({restaurant}) {
  return (
   <>
       <Link to={`/rest_view/${restaurant.id}`} style={{textDecoration:'none'}}>
           <Card style={{ width: '100%' }}>
          <Card.Img height={'350px'} variant="top" src={restaurant.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-warning p-2'>{restaurant.name}</Card.Title>
            <Card.Text>
             <Row>
                <Col className='ms-3 p-3'>
                <Card.Text>
                <p style={{fontSize:"20px"}}>{restaurant.neighborhood}</p>
                </Card.Text>
                </Col>
    
                <Col className='ms-3 p-3'>
                <Card.Text>
                <p style={{fontSize:"20px"}}>Cuisine:{restaurant.cuisine_type}</p>
    
                </Card.Text>
    
                </Col>
             </Row>
            </Card.Text>
          </Card.Body>
        </Card>
    
       </Link>
   </>
  )
}

export default RestCard