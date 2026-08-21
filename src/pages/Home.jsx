


import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { fetchProducts, nextPage, prevPage } from '../redux/slice/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/slice/cartSlice';
import { addtoWishlist } from '../redux/slice/wishslice';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";



function Home() {

    const dispatch = useDispatch();

    const { products, error, pending ,currentPage } = useSelector(
        state => state.productReducer
    );
    const productsPerPage=10
    const totalPages=Math.ceil((products.length)/productsPerPage)
    const endIndex=currentPage*10
    const startIndex=endIndex-10

    const handleNext=()=>{
        if(currentPage<totalPages){
            dispatch(nextPage())
        }
    }

    const handlePrev=()=> {
        if(currentPage>1){
            dispatch(prevPage())
        }
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {/* Header */}
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">
                            Shop in style
                        </h1>

                        <p className="lead fw-normal text-white-50 mb-0">
                            With this shop homepage template
                        </p>
                    </div>
                </div>
            </header>

            {/* Products */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">

                    {/* Loading */}
                    {pending ? (
                        <div className="container d-flex justify-content-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
                                alt="loading"
                                width="100"
                            />
                        </div>
                    ) : error?.length > 0 ? (

                        /* Error */
                        <h3 className="text-center text-danger">
                            {error}
                        </h3>

                    ) : (

                        /* Product Grid */
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                            {products?.slice(startIndex,endIndex).map(item => (

                                <div
                                    className="col mb-5"
                                    key={item?.id}
                                >
                                    <div className="card h-100">

                                        {/* Product Image */}
                                        <Link to={`/product/${item?.id}`}>
                                            <img
                                                className="card-img-top"
                                                src={item?.thumbnail}
                                                alt={item?.title}
                                            />
                                        </Link>

                                        {/* Product Details */}
                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">
                                                    {item?.title}
                                                </h5>

                                                <p>
                                                    ${item?.price}
                                                </p>

                                            </div>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">

                                            <button
                                                to=""
                                                className="btn" onClick={()=>{dispatch(addtoWishlist(item))}}
                                            >
                                                <FaHeartCirclePlus
                                                    className="text-danger fs-4"
                                                />
                                            </button>

                                            <button
                                                className="btn"
                                                to="" onClick={()=>{dispatch(addtoCart(item))}}
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
                    )}

                </div>
            </section>
            <div className=''>
                <div className='my-3 d-flex gap-2 justify-content-center align-items-center'>
                    <button className='btn' onClick={handlePrev}><TbPlayerTrackPrevFilled /></button>
                    <span>{currentPage}/{totalPages}</span>
                    <button className='btn' onClick={handleNext}><TbPlayerTrackNextFilled /></button>
                </div>
            </div>
        </>
    )
}

export default Home




