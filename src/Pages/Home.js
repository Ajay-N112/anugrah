import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import View from '../Components/View'
import Categories from '../Components/Categories'
import { Link } from 'react-router-dom'

function Home() {

  //state for state lifting
  const [addUdate,setAddUpdate]=useState({})

  return (

    <div className='text-white '>

      <h2 className='mt-4 ps-5 mb-4'>
      <b> <span className='text-success'>U</span>ploading<span className='text-success'>V</span>ideos </b> 
      </h2>
      <div className=''>
        <Row>
          <Col>
       <Link to={'/watch-history'} style={{textDecoration: 'none'}}>
       <a className='text-warning ps-5' style={{textDecoration:'none',}} >
        <i class="fa-solid fa-clock fa-spin"></i> Watch History</a>
        </Link>
        </Col>

        <Col >
        <img  src="" alt="" />
        </Col>
        </Row>
      </div>

      <Row className=''>
        <Col lg={1}>

          <Add update={setAddUpdate}></Add>

        </Col>

        <Col lg={7}>

          <View updateState={addUdate}></View>

        </Col>

        <Col lg={4}>

          <Categories></Categories>

        </Col>
      </Row>
    </div>
  )
}

export default Home