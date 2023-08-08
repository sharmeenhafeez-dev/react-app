import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';


export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fontStyle = { fontWeight: 'bold' };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((json) => {
        setProducts(json.data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div className="container">
      <div className="m-5 text-center">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ullam doloribus nesciunt fugiat minima
          omnis facilis unde quos! Temporibus, culpa? Illo architecto libero unde ipsam porro velit minus optio
          provident?
        </p>
      </div>
      {/* {users.length > 0 ? (
        <div className="container">
          <div className="row gap-5 mt-5">
            {users.map((user, index) => (
              <ProductsCards data={user} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <Spinner animation="border" />
        </div>
      )} */}




      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="row p-3">
          {products.map((val, key) => (
            <div className="col-md-3 " key={key}>
              <Link className="text-decoration-none" to={`/products/${val.id}`}>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={val.thumbnail} />
                  <Card.Body>
                    <Card.Title style={fontStyle}>
                      {val.title}-{val.price}$
                    </Card.Title>
                    <Card.Text>{val.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      )}

      {<categoryName/>}
    </div>

    
  );
}
