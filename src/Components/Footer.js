import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Footer() {
  return (

    <div className='bg-white mt-5 p-5'>
      <Row>
        <Col>
        <img 
          alt=""
         src="https://i.postimg.cc/YSgGdWyX/ri-Lo855e-T.png"
          width="30"
          height="30"
          className="d-inline-block align-top ms-3"
        />{' '}
<b><span className='text-danger ms-'>V</span>ideo <span  className='text-danger'>U</span>ploader </b>
<h5 className='mt-2 p-2 ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit eos incidunt commodi perspiciatis earum, sint porro aspernatur.</h5>

        </Col >

        <Col className='ms-5'>
          <h4> <b> Link </b></h4>
     <b>   <a className='fs-5 text-danger'style={{textDecoration:'none'}} href="">Landing </a><br /> </b>
     <b> <a className='fs-5  text-danger'style={{textDecoration:'none'}} href="">home</a><br />  </b>
     <b>  <a className='fs-5  text-danger'style={{textDecoration:'none'}} href="">Landing</a><br />  </b>

        </Col>

        <Col className=''>
<h5>Guide</h5>
<h5>react</h5>
<h5>react bootstrap</h5>
<h5>routing</h5>

        </Col>

        <Col className=''>
<h4 className='text-danger'>Contact Us</h4>
<input type="text" className='form-control w-75' placeholder='enter email'/>
<Button className='w-75 mt-4' variant="danger ">send</Button>{' '} <br />
<i class="fa-brands fa-instagram "></i>
<i class="fa-brands fa-facebook "></i>

<i class="fa-brands fa-twitter "></i>
        </Col>


      </Row>
    </div>

  )
}

export default Footer