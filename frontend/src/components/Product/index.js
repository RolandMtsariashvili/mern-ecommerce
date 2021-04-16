import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product.id} className="product-card">
      <a href={`/product/${product.id}`}>
        <img
          className="product-card__img"
          src={product.image}
          alt={product.description}
        />
      </a>
      <a href={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </a>
      <Rating rating={product.rating} reviewsNum={product.reviewsNum} />
      <div className="price">{`$${product.price}`}</div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
