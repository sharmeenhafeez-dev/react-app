import React, { useEffect ,useState} from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AllProductsSection() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
          .then(json =>  setProducts(json.data.products))
          .catch(error => console.log(error));
          
      }, []);

  return (
 <div className="col ">
    <h1>ALL Prodducts</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in quod, porro ab iusto illum architecto eum illo hic ipsum dolores magni recusandae doloribus. Omnis est amet maxime fugiat id?</p>
 
 <div className="row p-3">
  {
    products.map((val,key)=>  
    
    <div className="col-md-3"key={key}>

    <Link className='text-decoration-none' to={`/products/${val.id}`}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={val.thumbnail} style={{ objectFit: 'contain', height: '100%' }} />     
     <Card.Body className='bg-dark text-white'>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
    
    </Link>
    </div>)
  }
 </div>
 
 </div>


  )
}
