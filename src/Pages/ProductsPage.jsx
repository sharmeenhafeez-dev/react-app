import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import ImageSection from '../Components/ImageSection';

export default function ProductsPage() {
    const { productsID } = useParams();
    const [product, setProduct] = useState([]);
    const [review, setReview] = useState("");
    const [ratingstar, setRatingstar] = useState([0]);
    const [productQuantity, setProductQuantity] = useState(1)

    const ratingChanged = (newRating) => {
        setRatingstar(newRating)
    }

    const submitReview = () => {
        const payLoad = {
            productsID: productsID,
            review: review,
            rating: ratingstar
        }
        console.log(payLoad)

        Swal.fire({
            title: 'successfully submitted!',
            text: 'thanks for Reviewing our products',
            icon: 'success',
            confirmButtonText: 'continue shopping'
        })
    }

    const addToCart = () => {
        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }
        console.log(payload)
    }

    
    Swal.fire({
        title: 'Added to Cart',
        text: 'Check your Cart for check out',
        icon: 'success',
        confirmButtonText: 'continue shopping'
    })

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${productsID}`)
            .then((json) => setProduct(json.data));
    }, []);

    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>{product.title}</h1>
                <p className="text-secondary">{product.description}</p>
            </div>
            <div className="text-center">
                <div className='d-flex justify-content-center'>
                    <ReactStars
                        count={5}
                        edit={false}
                        value={product.rating}
                        size={24}
                        color2={'#ffd700'}
                    />
                </div>
                <div className='my-3'>
                    <div>
                    <button className='btn btn-dark mx-3'disabled ={productQuantity>1?false:true} onClick={() => setProductQuantity(productQuantity - 1)}>-</button>
                        {productQuantity}
                        <button className='btn btn-dark mx-3' onClick={() => setProductQuantity(productQuantity + 1)}>+</button>

                    </div>
                </div>
                <div>
                    <button className='btn btn-dark' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {product?.images?.length > 0 && <ImageSection images={product.images} />}
                </div>
                <div className="col-md-6">
                    <div className="container m-5">
                        <div className='md-5'>
                            <h2 className='text-center'>Reviews Us</h2>
                            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate tempora consequatur quibusdam mollitia quia facilis quos vero veniam fugit obcaecati illum et, voluptatem, debitis impedit ab id. Dolorum, excepturi?</p>
                        </div>
                        <div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>
                            <div className=''>
                                Rate US:
                                <div className="d-flex align-items-center">
                                    <ReactStars
                                        count={5}
                                        value={ratingstar}
                                        onChange={ratingChanged}
                                        size={24}
                                        color2={'#ffd700'}
                                    />
                                    <span className='ms-3'>({ratingstar})</span>
                                </div>
                            </div>
                            <button className='md-5 btn btn-dark' onClick={submitReview}>Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
