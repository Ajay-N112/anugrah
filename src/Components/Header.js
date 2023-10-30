import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div><Navbar className="bg-white">
    <Container>

      <Link to={"/"} style={{textDecoration:'none'}}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://i.postimg.cc/YSgGdWyX/ri-Lo855e-T.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
<b className=''><span className='text-danger'>V</span>ideo <span  className='text-danger'>U</span>ploader</b>
 </Navbar.Brand>

 </Link>
    </Container>
  </Navbar></div>
  )
}

export default Header