import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'



function LandingPage() {
  return (
    <div>
  <Row>
    <Col className='p-5'>

    <h1>
    <b className='text-white ps-5'> <span className='text-danger'>V</span>ideo<span className='text-danger'>P</span>layer </b>
    </h1>

    <p className='fs-4 mt-4 p-2 text-white ps-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo consectetur neque enim maiores officiis rem quia sapiente ad! Dignissimos temporibus blanditiis, autem unde atque quo dolore obcaecati harum ut! </p>
< Link to={'/home'}>   
    <Button className='mb-3 w-10 ms-5 ps-' variant="outline-danger">Get Start</Button>{' '}
    </Link> 


   </Col>
    <Col>
{/* <img className='w-50 mt-5 mb-2 bg-black' src="https://i.postimg.cc/tgG1szXX/ILtG.gif" alt="" /> */}
   {/* <img className='w-30 mt-5 mb-2 ms-5' src="https://i.postimg.cc/Hs7vHpnf/images-2.png" alt="" /> */}
        <img className='w-75 mt-5 ms-5 h-50' src="https://i.postimg.cc/0Qqr2ggk/2f35309e0507656bce31619a16ae2569.gif" alt="" />

    </Col>

<Container>
  <Row>
    <Col>
    <h2 className='text-danger text-center'>Features</h2></Col>
  </Row>
<Row>
  <Col>
  <Card className='ms-4 text-center text-info ' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/P5fy6cNR/OhAQ.gif" />
      <Card.Body>
        <Card.Title>Features</Card.Title>
        <Card.Text>
         
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  </Col>


  <Col>
  <Card className='ms-5 text-center text-info ' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/1tccWphy/Jp7H.gif" />
      <Card.Body>
        <Card.Title>Uploading</Card.Title>
        <Card.Text>
      
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card className='ms-4 text-center text-info ' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/P5fy6cNR/OhAQ.gif" />
      <Card.Body>
        <Card.Title>Streaming</Card.Title>
        <Card.Text>
      
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  </Col>

</Row>

</Container>
</Row>
    </div>
  )
}

export default LandingPage