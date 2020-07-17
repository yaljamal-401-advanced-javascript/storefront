import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { triggerTheStock } from '../../store/products-reducer';
import { addToCart } from '../../store/cart-reducer';

/////


const Products = (props) => {
  //   console.log('products', props.catAndProReducer.products);
  //   console.log('props.activeCategory', props.catAndProReducer.activeCategory);


  return (
    <>
      <h3 className='category-header'>{props.categoryReducer.activeCategory.toUpperCase()}</h3>
      <div className='products'>
        {props.productsReducer.filter(product => product.category === props.categoryReducer.activeCategory && product.inStock > 0)
          .map(product => {

            return (
              <div className='one-product' key={product.name}>
                <h3>Product Name : {product.name}</h3>
                <img src={`${product.img}`} alt='hi' />
                <p className='category'>Product Category : {product.category}</p>
                <p className='inStock'>In Stock : {product.inStock}</p>
                <p className='price'>Price : {product.price}</p>

                <div className='buttons'>
                  <Button variant="contained" color="primary" aria-label="outlined secondary button group" onClick={() => { props.triggerTheStock(product.name); props.addToCart(product); }} >
                    Add To Cart
                  </Button>
                  <Button variant="contained" color="primary" aria-label="outlined secondary button group">
                    View Details
                  </Button>

                </div>


              </div>
            );
          })}

      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryReducer: state.categoryReducer,
    productsReducer: state.productsReducer,
    cartReducer: state.cartReducer,
  };
};
const mapDispatchToProps = { triggerTheStock, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

