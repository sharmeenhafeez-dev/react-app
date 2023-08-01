import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import ProductsCards from '../Components/ProductsCards';
import HeaderSection from '../Components/HeaderSection';
import CategoriesSection from '../Components/CategoriesSection';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setTimeout(() => {
          setUsers(response.data);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
 <div>
    <CategoriesSection/>
    </div>
    <HeaderSection/>
   
  
    
      {users.length > 0 ? (
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
      )}

      
    </>
  );
}