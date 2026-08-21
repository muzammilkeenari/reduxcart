import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaOpencart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slice/ProductSlice';

function Header() {

  const dispatch= useDispatch()
  const { cart } = useSelector(
    state => state.cartReducer
)

 const { wish } = useSelector(
    state => state.wishReducer
)
  
  return (
    <>

     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <FaOpencart className='text-danger' style={{fontSize:'25px'}}/>
           {' '}
            Redux-Kart
          </Navbar.Brand>
          <input type="search" onChange={(e)=>(dispatch(searchProduct(e.target.value)))} placeholder='Enter keyword to search' className="form-control w-50 border border-dark" />
          <div className="d-flex gap-3">
            <Link className="btn btn-outline-dark " to={"/cart"}  ><FaShoppingCart className='text-success'/>{' '}cart{' '} <span className='badge bg-dark'>{cart?.length}</span> </Link>
            <Link className="btn btn-outline-dark" to={"/wish"}><FaHeart className='text-danger'/>{' '}Wishlist{' '} <span className='badge bg-dark'>{wish?.length}</span> </Link>
          </div>
        </Container>
      </Navbar>

    </>
  )
}

export default Header