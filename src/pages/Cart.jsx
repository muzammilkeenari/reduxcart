import React from 'react';
import {
  FaRegTrashAlt,
  FaPlus,
  FaMinus,
  FaShoppingBag,
  FaArrowLeft
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/slice/cartSlice';

function Cart() {
  const {cart} = useSelector(state=>state.cartReducer)
  console.log(cart)

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
)

const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
)

const shipping = 0

const total = subtotal + shipping

const dispatch=useDispatch()
  return (<> 
    <div className="bg-light min-vh-100 py-5">

      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              Shopping Cart
            </h2>

            <p className="text-muted mb-0">
              1 item in your cart
            </p>
          </div>

          <FaShoppingBag className="fs-2 text-danger" />

        </div>


        <div className="row g-4">

          {/* Cart Products */}
          <div className="col-12 col-lg-8">

            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

              {/* Desktop Table */}
              <div className="table-responsive">

                <table className="table align-middle mb-0">

                  <thead className="table-light">

                    <tr>
                      <th className="px-4">Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>

                  </thead>
                  <tbody>

  {cart.length > 0 ? (

    cart.map(item => (

      <tr key={item.id}>

        {/* Product */}
        <td className="px-4">

          <div className="d-flex align-items-center gap-3">

            <div
              className="bg-light rounded-3 p-2"
              style={{
                width: '80px',
                height: '80px'
              }}
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-100 h-100"
                style={{
                  objectFit: 'contain'
                }}
              />

            </div>

            <div>

              <h6 className="fw-bold mb-1">
                {item.title}
              </h6>

              <small className="text-muted">
                {item.category}
              </small>

            </div>

          </div>

        </td>


        {/* Price */}
        <td>
          <span className="fw-semibold">
            ${item.price}
          </span>
        </td>


        {/* Quantity */}
        <td>

          <div className="d-flex align-items-center gap-2">

            <button className="btn btn-sm btn-outline-dark rounded-circle" onClick={()=>dispatch(decreaseQuantity(item?.id))}>
              <FaMinus />
            </button>

            <span
              className="fw-bold"
              style={{
                minWidth: '25px',
                textAlign: 'center'
              }}
            >
              {item.quantity}
            </span>

            <button className="btn btn-sm btn-dark rounded-circle" onClick={()=>dispatch(increaseQuantity(item?.id))}>
              <FaPlus />
            </button>

          </div>

        </td>


        {/* Total */}
        <td>
          <strong>
            ${(item.price * item.quantity).toFixed(2)}
          </strong>
        </td>


        {/* Delete */}
        <td>

          <button className="btn btn-light rounded-circle" onClick={()=>dispatch(removeFromCart(item?.id))}>
            <FaRegTrashAlt className="text-danger" />
          </button>

        </td>

      </tr>

    ))

  ) : (

    <tr>

      <td colSpan="5" className="text-center py-5">

        <h5>Your cart is empty</h5>

        <Link to="/" className="btn btn-danger mt-2">
          Continue Shopping
        </Link>

      </td>

    </tr>

  )}

</tbody>
                  
                  {/* 
                  <tbody>

                    <tr>

                      
                      <td className="px-4">

                        <div className="d-flex align-items-center gap-3">

                          <div
                            className="bg-light rounded-3 p-2"
                            style={{
                              width: '80px',
                              height: '80px'
                            }}
                          >

                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs47gVionH3m1lIqC9t7Ffw8WDFhNXvt2s0roeiHF5Gg&s"
                              alt="iPhone 17"
                              className="w-100 h-100"
                              style={{
                                objectFit: 'contain'
                              }}
                            />

                          </div>

                          <div>

                            <h6 className="fw-bold mb-1">
                              iPhone 17
                            </h6>

                            <small className="text-muted">
                              Smartphone
                            </small>

                          </div>

                        </div>

                      </td>


                      
                      <td>
                        <span className="fw-semibold">
                          $1,500
                        </span>
                      </td>


                     
                      <td>

                        <div className="d-flex align-items-center gap-2">

                          <button className="btn btn-sm btn-outline-dark rounded-circle">
                            <FaMinus />
                          </button>

                          <span
                            className="fw-bold"
                            style={{ minWidth: '25px', textAlign: 'center' }}
                          >
                            1
                          </span>

                          <button className="btn btn-sm btn-dark rounded-circle">
                            <FaPlus />
                          </button>

                        </div>

                      </td>


                     
                      <td>
                        <strong>
                          $1,500
                        </strong>
                      </td>


                     
                      <td>

                        <button className="btn btn-light rounded-circle">

                          <FaRegTrashAlt className="text-danger" />

                        </button>

                      </td>

                    </tr>

                  </tbody> */}

                </table>

              </div>

            </div>
          </div>


          {/* Order Summary */}
<div className="col-12 col-lg-4">

    <div className="card border-0 shadow-sm rounded-4 p-4">

        <h4 className="fw-bold mb-4">
            Order Summary
        </h4>

        {/* Items */}
        <div className="d-flex justify-content-between mb-3">

            <span className="text-muted">
                Items
            </span>

            <span>
                {totalItems}
            </span>

        </div>

        {/* Subtotal */}
        <div className="d-flex justify-content-between mb-3">

            <span className="text-muted">
                Subtotal
            </span>

            <span>
                ${subtotal.toFixed(2)}
            </span>

        </div>

        {/* Shipping */}
        <div className="d-flex justify-content-between mb-3">

            <span className="text-muted">
                Shipping
            </span>

            <span className="text-success fw-semibold">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            </span>

        </div>

        <hr />

        {/* Total */}
        <div className="d-flex justify-content-between mb-4">

            <span className="fs-5 fw-bold">
                Total
            </span>

            <span className="fs-4 fw-bold text-danger">
                ${total.toFixed(2)}
            </span>

        </div>

        <button
            className="btn btn-danger w-100 rounded-pill py-2 fw-semibold"
            disabled={cart.length === 0}
        >
            Proceed to Checkout
        </button>

    </div>

    <div className="text-center mt-3">

        <small className="text-muted">
            🔒 Secure checkout • Fast delivery
        </small>

    </div>

</div>


          
          {/* <div className="col-12 col-lg-4">

            <div className="card border-0 shadow-sm rounded-4 p-4">

              <h4 className="fw-bold mb-4">
                Order Summary
              </h4>


              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Items
                </span>

                <span>
                  1
                </span>

              </div>


              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Subtotal
                </span>

                <span>
                  $1,500
                </span>

              </div>


              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Shipping
                </span>

                <span className="text-success fw-semibold">
                  Free
                </span>

              </div>


              <hr />


              <div className="d-flex justify-content-between mb-4">

                <span className="fs-5 fw-bold">
                  Total
                </span>

                <span className="fs-4 fw-bold text-danger">
                  $1,500
                </span>

              </div>


              <button className="btn btn-danger w-100 rounded-pill py-2 fw-semibold">
                Proceed to Checkout
              </button>

            </div>


           
            <div className="text-center mt-3">

              <small className="text-muted">
                🔒 Secure checkout • Fast delivery
              </small>

            </div>

          </div> */}

        </div>

      </div>

    </div>
    </>
  );
}

export default Cart;