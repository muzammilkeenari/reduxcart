import React from 'react'
import { Link } from "react-router-dom";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishslice';
import { addtoCart } from '../redux/slice/cartSlice';
function WishList() {
        const { wish } = useSelector(state => state.wishReducer)  

        // console.log(wish)
         const dispatch = useDispatch();
    return (
        <>

            <h3 className='text-center my-4'>WishList</h3>

            <section className="py-5">

                <div className="container px-4 px-lg-5 mt-5">

                    {wish.length > 0 ? (

                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                            {wish?.map(item => (

                                <div
                                    className="col mb-5"
                                    key={item.id}
                                >

                                    <div className="card h-100">

                                        {/* Product Image */}
                                        <Link to={`/product/${item.id}`}>

                                            <img
                                                className="card-img-top"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />

                                        </Link>


                                        {/* Product Details */}
                                        <div className="card-body p-4">

                                            <div className="text-center">

                                                <h5 className="fw-bolder">
                                                    {item.title}
                                                </h5>

                                                <p>
                                                    ${item.price}
                                                </p>

                                            </div>

                                        </div>


                                        {/* Card Footer */}
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">

                                            {/* Remove from Wishlist */}
                                            <button
                                                className="btn" onClick={()=>{dispatch(removeFromWishlist(item?.id))}}
                                            >
                                                <FaHeartCircleXmark
                                                    className="text-danger fs-4"
                                                />
                                            </button>


                                            {/* Add to Cart */}
                                            <button
                                                className="btn" onClick={()=>{dispatch(addtoCart(item))
                                                      dispatch(removeFromWishlist(item.id))
                                                }}
                                            >
                                            
                                                <FaCartPlus
                                                    className="text-success fs-4"
                                                />
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="text-center">

                            <h4>Your wishlist is empty ❤️</h4>

                            <Link
                                to="/"
                                className="btn btn-danger mt-3"
                            >
                                Continue Shopping
                            </Link>

                        </div>

                    )}

                </div>

            </section>




            {/* <h3 className='text-center'>WishList</h3>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Fancy Product</h5>

                                        $40.00 - $80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                                    <Link to={""} className="btn">
                                        <FaHeartCircleXmark className="text-danger fs-4" />
                                    </Link>
                                    <Link className='btn' to={""}><FaCartPlus className='text-success' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default WishList