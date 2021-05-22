import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductComponent.css'

const ProductComponent = () => {

    const products=useSelector(state=>state.allProducts.products);
    console.log(products);
    const renderList=products.map(product=>{
        const{title,price,category,image,id}=product
        return(
            <div className="card" style={{width:'20rem',height:'25rem',textAlign:'center',margin:'10px',float:'left'}}>
            <Link to={`products/${id}`}>
                <div className="card_content">
                    <div className="card_image">
                        <img className="card-img-top" src={image} alt="Card image cap"/>
                    </div>
                    <br />
                    <div className="card-body">
                        <h5>{title}</h5>
                        <h3 className="card-title">$ {price}</h3>
                        <p className="card-text">{category}</p>
                    </div>
                </div>
            </Link>
        </div>
        )
    })

    return (<>{renderList}</>);
};

export default ProductComponent;