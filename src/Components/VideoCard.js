import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideos } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns/esm';
import { id } from 'date-fns/locale';



function VideoCard({ video, deleteFn }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //body

    //id
    var id = uniqid()

    //tittle
    var video_title =video.caption

    //url
    var url =video.video_url

    //date
    var date = format(new Date(),'yyyy-MM-dd h:mm:ss a')
    // console.log(date);

    const body = {id,video_title,url,date }
    if (body) {
      //api call
      const result = await addHistory(body)
      // console.log(result);
    }


  }

  const handdleDelete = async (id) => {
    const result = await deleteVideos(id)
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      deleteFn(result.data)
    }
  }
  const dragStart=(e,id)=>{
    console.log("drag Started ... source card id -"+id);
   
    //store graged data 
    e.dataTransfer.setData("cardId",id)
  }

  return (
    <div>

      <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='mt-3 bg-black border-dark ' style={{ width: '18rem' }}>
        <Card.Img onClick={handleShow}
          variant="top" src={video.cover_image} />
        <Card.Body className='text-info'>
          <Card.Title>{video.caption}</Card.Title>

          <div className='text-end'>

            <Trash2 onClick={() => handdleDelete(video.id)} size={20} className='text-warning'></Trash2>
            {/* <i  class="fa-solid fa-trash fa-bounce text-warning"></i> */}

          </div>

        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-black border border-warning'>

          <iframe width="100%" height="300" src={video.video_url} title="Journey  Full video song (Tamil) 
        | Jaanu | Govind Vasantha | Karthik Netha"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

          {/* <iframe  width="100%" height="300" src={video.video_url} title="भारत की अविस्मरणीय जीत | 2011 विश्व कप" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard