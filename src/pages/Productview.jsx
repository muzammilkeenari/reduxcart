import React, { useState, useEffect } from 'react'
import { FaStar, FaShoppingCart, FaHeart, FaBolt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart } from '../redux/slice/cartSlice'
import { addtoWishlist } from '../redux/slice/wishslice'

function ProductView() {

    const [detail, setDetail] = useState({})

    const { id } = useParams()

    const dispatch = useDispatch()

    const { products } = useSelector(
        state => state.productReducer
    )

    useEffect(() => {

        if (products?.length > 0) {

            const product = products.find(
                item => item.id == id
            )

            setDetail(product)

        }

    }, [products, id])


    return (
        <>
            <div className="container-fluid">

                <h2 className="text-center my-4">
                    Product Details
                </h2>

                <div className="container">

                    <div className="row">

                        {/* Image */}
                        <div className="col-sm-12 col-md-6">

                            <img
                                src={detail?.thumbnail}
                                alt={detail?.title}
                                width="100%"
                            />

                        </div>


                        {/* Details */}
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">

                            <h2>
                                {detail?.title}
                            </h2>

                            <h6 className="text-end">
                                CATEGORY :
                                <b> {detail?.category}</b>
                            </h6>

                            <h6>
                                PRICE :
                                <b> ${detail?.price}</b>
                            </h6>

                            <p style={{ textAlign: 'justify' }}>
                                {detail?.description}
                            </p>

                            <h6>
                                Rating :

                                <span>

                                    <FaStar className="text-warning ms-2" />

                                    {' '}

                                    {detail?.rating}

                                </span>

                            </h6>


                            {/* Buttons */}
                            <div className="d-flex gap-2 mt-3">

                                {/* Cart */}
                                <button
                                    className="btn btn-warning"
                                    onClick={() =>
                                        dispatch(addtoCart(detail))
                                    }
                                >

                                    <FaShoppingCart className="me-2" />

                                    Add to Cart

                                </button>


                                {/* Wishlist */}
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        dispatch(addtoWishlist(detail))
                                    }
                                >

                                    <FaHeart className="me-2" />

                                    Wishlist

                                </button>


{/*                                 
                                <button className="btn btn-success">

                                    <FaBolt className="me-2" />

                                    Buy Now

                                </button> */}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductView