import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cartProducts, removeSelectedProduct, selectedProduct } from '../../redux/actions/productActions';
import './ProductDetail.css'

const ProductDetails = () => {

    const product=useSelector(state=>state.product);

    const{title,price,category,description,image}=product;

    const { productId }=useParams();

    const dispatch=useDispatch()
    const fatchProductDetail=async()=>{
        
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err=>{
            console.log("err",err);
        })
        dispatch(selectedProduct(response.data));
    }

    useEffect(()=>{
        if(productId && productId!=="") fatchProductDetail()
        return()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId])

    if(product==={}){
        return(
            <div>Loading....</div>
        )
    }
    
    const handleAddToCart=(product)=>{
        dispatch(cartProducts(product))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="productDetail_image">
                    <img src={image} alt={title} />
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <h4>{title}</h4>
                    <h3>{price}</h3>
                    <h5>{category}</h5>
                    <p>{description}</p>
                    <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;