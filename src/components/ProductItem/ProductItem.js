import React from 'react';

const ProductItem = (props) => {
    const{title,price,category,image}=props.product
    console.log(props.product);
    return (
        <div className="card" style="width: 18rem;">
            {props.product && 
            <div>
                <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h2>{title}</h2>
                <h1 className="card-title">$ {price}</h1>
                <p className="card-text">{category}</p>
            </div>
            </div>
            }
        </div>
    );
};

export default ProductItem;