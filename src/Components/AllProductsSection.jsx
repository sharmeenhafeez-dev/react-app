import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner

export default function AllProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setTimeout(() => {
          setProducts(response.data.products);
          setLoading(false); // Set loading to false after products are fetched
        }, 2000); // Delay for 2000 milliseconds (2 seconds)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="col">
     <h1 className='d-flex justify-content-center align-item-center'>ALL Products</h1>
     <div >
     <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        in quod, porro ab iusto illum architecto eum illo hic ipsum dolores
        magni recusandae doloribus. Omnis est amet maxime fugiat id?
      </p>
     </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="row p-3">
          {products.map((val, key) => (
            <div className="col-md-3" key={key}>
              <Link className="text-decoration-none" to={`/products/${val.id}`}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    style={{
                      objectFit: 'contain',
                      height: 'auto',
                      maxHeight: '250px',
                      width: 'auto',
                      maxWidth: '250',
                    }}
                    variant="top"
                    src={val.thumbnail}
                  />
                  <Card.Body className="bg-dark text-white">
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="light">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
