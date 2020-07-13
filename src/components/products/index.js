import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Products = (props) => {

  return (
    <>
      <h3>the Products</h3>
      <div className='products'>
        {props.catAndProReducer.products.filter(allProducts => allProducts.category === props.catAndProReducer.activeCategory)
          .map(product => {

            return (
              <>
                < Card style={{ width: '18rem', float: 'left' }}>
                  <Card.Img variant="top" src={`${product.img}`} style={{ width: '80%' }} />
                  <Card.Body>
                    <Card.Title>Product Category : {product.category}</Card.Title>
                    <Card.Text>
                      In Stock : {product.inStock}
                    </Card.Text>
                    <Card.Text>
                      Price : {product.price}
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-primary" >Add To Cart</Button>
                  <Button variant="outline-primary">View Detalis</Button>

                </Card>
              </>
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { catAndProReducer: state.catAndProReducer };
};

export default connect(mapStateToProps)(Products);

