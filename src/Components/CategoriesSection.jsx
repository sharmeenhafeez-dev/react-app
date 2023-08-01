import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const handleCloseOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  const handleToggleSidebar = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(json => setCategories(json.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-dark mt-2 mb-2"
          onClick={handleToggleSidebar}
        >
          {isOffcanvasOpen ? 'Hide Sidebar' : 'Categories'}
        </button>
        {isOffcanvasOpen && (
          <div
            className={`offcanvas offcanvas-start show text-bg-dark`}
            tabIndex={-1}
            id="offcanvasDark"
            aria-labelledby="offcanvasDarkLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkLabel">
                Categories List
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleCloseOffcanvas}
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              {categories.map((val, key) => (
                <div className="" key={key}>
                  <Link className="text-decoration-none text-white" to={`/products/category/${val}`}>
                    <hr />
                    <p>{key + 1}. {val.charAt(0).toUpperCase() + val.slice(1)}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
