import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllvideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'

function View({updateState}) {

  const[allvideos,setAllVideos]=useState([])

  //state to update delete
  const [deleUpdate,setDeleteUpdate]=useState({})

  const accessAllvideos=async ()=>{
    const result=await getAllvideos()
    if(result.status>=200 && result.status<300){
      // console.log(result.data);
      setAllVideos(result.data)
    }
  }
console.log(allvideos);
  useEffect(()=>{
    accessAllvideos()
  },[updateState,deleUpdate])

  return (
    <Row>
      {
        allvideos.length>0?(
          allvideos.map(i=>
          <Col lg={6} md={6} > <VideoCard deleteFn={setDeleteUpdate} video={i}></VideoCard> </Col>

          )
        ):<h1>empty collection</h1>
      }
    </Row>
  )
}

export default View

