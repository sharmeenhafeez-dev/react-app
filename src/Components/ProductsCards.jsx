import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function ProductsCards({ data }) {
  const [count, setCount] = useState(0);

  const increaseValue = () => setCount(count + 1);
  const decreaseValue = () => setCount(count - 1);

  return (
    <div className="col-md-3">
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Title>{data.phone}</Card.Title>
          <Card.Text>
            Street No {data.address.street}, Suite No {data.address.suite}, {data.address.city}, {data.address.zipcode}
          </Card.Text>
          <div className="container text-center">
            {count > 0 ? (
              <>
                <button className="btn btn-dark mx-2" onClick={increaseValue}>
                  +
                </button>
                {count}
                <button className="btn btn-dark mx-2" onClick={decreaseValue}>
                  -
                </button>
              </>
            ) : (
              <button className="btn btn-dark mx-2" onClick={increaseValue}>
                Add to cart
              </button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}