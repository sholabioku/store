import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { productsArray } from '../productsStore';

const Store = () => {
  return (
    <>
      <h1 align='center' className='p-3'>
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className='g-4'>
        {productsArray.map((product, index) => (
          <Col align='center' key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
