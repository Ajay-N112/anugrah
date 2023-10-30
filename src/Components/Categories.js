import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import { Trash } from 'react-feather';
import { id } from 'date-fns/locale';
import { Link } from 'react-router-dom';

function Categories() {
  //state to hold input,id and vide array
  const [catInput, setcatInputs] = useState({
    name: "",
    id: "",
    videos: []
  })

  const [categories, setCategories] = useState({})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setcatInputs({ ...catInput, [name]: value })
  }

  const addData = async () => {
    let id = uniqid()
    setcatInputs({ ...catInput, ["id"]: id })

    const { name } = catInput
    if (name == "") {
      toast.error("All inputs are needed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
    else {
      //api call
      const result = await addCategory(catInput)
      if (result.status >= 200 && result.status < 300) {
        setShow(false);

        getAllCategories()

        toast.success(`${result.data.name}added`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      }
    }
  }
  // console.log(catInput);
  const getAllCategories = async () => {
    const result = await getAllCat()

    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data)

    }

  }
  // console.log(Categories);
  const removeCategory = async (id) => {
    const result = await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {
      getAllCategories()

    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragged over the category ... ");
  }

  const dropped=async(e,id)=>{
    console.log("dropped...cat Id-"+id);
  
//video id access
  const videoId=e.dataTransfer.getData("cardId")
console.log(videoId);

//access video data from backend
const {data}=await getVideo(videoId)
console.log(data);

//select dropped category from all categories
const selectedCategory=categories.find(i=>i.id == id) 
console.log(selectedCategory);

//update category object with video data
selectedCategory.videos.push(data)
console.log(selectedCategory);

//api call to update changed category in backend 
await updateCategory(id,selectedCategory)

getAllCategories()

  }

  return (
    <div>
      <Button onClick={handleShow} className='mb-3 w-10 ms-5 ps-' variant="outline-danger">Add Categories</Button>{' '}

      {
        categories.length > 0 ? (
          categories.map(i => (
            <div droppable
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => dropped(e, i?.id)}

              className='border mt-3 p-3'>
                <Link style={{textDecoration: 'none'}} to={"/view"}>
              <p className='fs-4'>{i.name}</p>
              </Link>
              <div className='text-end'>
                <Trash onClick={() => { removeCategory(i.id) }} size={25} className='text-warning'></Trash>
              </div>
              {
                i.videos.map(j=>(
                  <img style={{height:'70px',width:'70px'}} src={j.cover_image} alt="" />
                ))
              }
            </div>
          ))
        ) : <h1>no category</h1>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="" label="Add Categories">
            <Form.Control onChange={(e) => setInputs(e)} name="name" type="floatinginput" placeholder="" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

          <Button variant="danger" onClick={addData}>
            Add
          </Button>

        </Modal.Footer>
      </Modal>

      <ToastContainer />

    </div>
  )
}

export default Categories