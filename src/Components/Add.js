import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
function Add({update}) {

  //state to hold input datas
  const [inputs,setInputs]=useState({
    id:"",
    caption:"",
    cover_image:"",
     video_url:""
  })
//function for onChange
const setValues=(e)=>{
  let {value,name}=e.target
  // console.log(value,name);
  setInputs({...inputs,[name]:value})
  // console.log(inputs);
}   
//function to extrate video url
const extrateUrl=(e)=>{
  let videoUrl=e.target.value
  // console.log(videoUrl);
  if(videoUrl.includes("v=")){
    let subUrl=videoUrl.split("v=")[1]
    // console.log(subUrl);
    let finalUrl=`https://www.youtube.com/embed/${subUrl}?autoplay=1`
    setInputs({...inputs,['video_url']:finalUrl})

  }
}

// console.log(inputs);

//function to add button
const addHandle=async ()=>{
  let id=uniqid()
  console.log(uniqid);
  setInputs({...inputs,["id"]:id})

  const {caption,cover_image,video_url}=inputs

  if(caption=="" || cover_image=="" || video_url==""){
    toast.error("All inputs are needed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  else{

  const result = await addVideo(inputs)
  console.log(result);

  if(result.status >= 200 && result.status < 300){

        //update state of home
        update(result.data)

  //  toast("video added")
   toast.success("video added", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    setShow(false)
  
  }
  }

}
console.log(inputs);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div> <i  onClick={handleShow} class="fa-solid fa-cloud-arrow-up fa-flip text-warning p-3 fs-5"></i>
    
    

      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Body className='bg-black border'>

      <Modal.Title>video uploader</Modal.Title>


          <FloatingLabel
        controlId="floatingInput"
        label="video caption"
        className="mb-3 mt-5"
      >
        <Form.Control name='caption' onChange={(e)=>setValues(e)}  type="" placeholder="" />
      </FloatingLabel>

      <FloatingLabel controlId="" label="cover img url">
        <Form.Control name='cover_image' onChange={(e)=>setValues(e)} type="" placeholder="" />
      </FloatingLabel>

      <FloatingLabel className='mt-3'  controlId="" label="Utube video url">
        <Form.Control onChange={(e)=>extrateUrl(e)} type="" placeholder="" />
      </FloatingLabel>



      </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    
      <ToastContainer />
    </div>
  )
}

export default Add