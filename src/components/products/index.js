import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { triggerTheStock } from '../../store/products-reducer';
import { addToCart } from '../../store/cart-reducer';
<<<<<<< HEAD

=======
import { getRemoteData, putRemoteData } from '../../store/actions';
>>>>>>> 908856a7127da0c72c01acb6fee73a1204eec809
/////


const Products = (props) => {

  const fetchData = (x) => {
    props.get(x);
  };
  useEffect(() => {
    fetchData('products');
  }, []);
  return (
    <>
      <h3 className='category-header'>{props.categoryReducer.activeCategory.toUpperCase()}</h3>
      <div className='products'>
<<<<<<< HEAD
        {props.productsReducer.filter(product => product.category === props.categoryReducer.activeCategory && product.inStock > 0)
=======
        {props.productsReducer.products.filter(product => product.category === props.categoryReducer.activeCategory && product.inStock > 0)
>>>>>>> 908856a7127da0c72c01acb6fee73a1204eec809
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

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    categoryReducer: state.categoryReducer,
    productsReducer: state.productsReducer,
    cartReducer: state.cartReducer,
  };
};
=======
const mapStateToProps = dispatch => ({
  get: (hi) => dispatch(getRemoteData(hi)),
  put: (id, data) => dispatch(putRemoteData(id, data, 'products')),
  triggerTheStock: (name) => dispatch(triggerTheStock(name)),
  addToCart: (product) => dispatch(addToCart(product))
});
>>>>>>> 908856a7127da0c72c01acb6fee73a1204eec809
const mapDispatchToProps = { triggerTheStock, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

