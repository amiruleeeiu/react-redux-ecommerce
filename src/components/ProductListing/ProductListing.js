import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../../redux/actions/productActions';
import ProductComponent from '../ProductComponent/ProductComponent';

const ProductListing = () => {
    const products=useSelector(state=>state.allProducts.products);

    const dispatch=useDispatch();

    const fetchProducts=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
        .catch(err=>{
            console.log("error"+err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])


    return (
        <div className="container">
           <ProductComponent/>
        </div>
    );
};

export default ProductListing;