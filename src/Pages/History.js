import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allapis';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function History() {

    const [histories, setHistories] = useState([])

    const getHistories = async () => {
        const { data } = await getAllHistory()
        setHistories(data);
        getHistories()
    }



    const removehistory = async (id) => {
        const result = await deleteHistory(id)
        if (result.status >= 200 && result.status < 300) {
          getAllHistory()
    
        }
      }
    

    useEffect(() => {
        getHistories()
    },[])

    console.log(histories);

    return (
        <div>
            <h1 className='text-center p-5 text-white'>Watch History</h1>
            {
            histories.length>0? (
                <Table className='w-75 container pb-5 mb-5' striped bordered hover variant='dark'>
                    <thead className='text-center fs-5'>
                        <tr className='text-bold'>
                            <th>#</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Video URL</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            histories?.map((i, index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{i?.date}</td>
                                    <td>{i?.video_title}</td>
                                    <td>{i?.url}</td>
                                    <td className='text-center'>
                                        <Trash2 onClick={()=>{removehistory(i?.id)}} size={50} className='btn text-white'></Trash2>
                                    </td>

                                </tr>
                            )
                        }


                    </tbody>
                </Table>) : <h1>No Watch History</h1>
            }

< Link  to={'/home'}>   
    <Button className='mb-3 w-10 ms-5 ' variant="outline-danger">Go Back</Button>{' '}
    </Link> 

        </div>
    )
}

export default History