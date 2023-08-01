import React, { useReducer, useform_state } from 'react';
import { useContext } from 'react'; 
import Button from 'react-bootstrap/Button';
import { GlobleContext } from '../Components/context/context';

const initialform_state = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  zipcode: '',
  form_state: '',
  city: '',
  skills: []
};

const formReducer = (form_state, action) => {
  switch (action.type) {
    case 'UPDATE-FIELD':
      return { ...form_state, [action.payload.name]: action.payload.value };
    case 'TOGGLE-SKILL':
      const skills = form_state.skills.includes(action.payload.skill)
        ? form_state.skills.filter((s) => s !== action.payload.skill)
        : [...form_state.skills, action.payload.skill];
      return { ...form_state, skills };
    default:
      return form_state;
  }
};

const Signup = () => {
  const [form_state, formDispatch] = useReducer(formReducer, initialform_state);
  const [state, dispatch] =useContext(GlobleContext)
  const [errors, setErrors] = useform_state({});

  const handleChange = (e) => {
    formDispatch({
      type: 'UPDATE-FIELD',
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  const handleSkillChange = (e) => {
    formDispatch({
      type: 'TOGGLE-SKILL',
      payload: {
        skill: e.target.value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Perform signup logic here
      console.log(form_state);

      dispatch(
        {
          type:"SIGNUP-USER",
          payload : form_state
        }
      )
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!form_state.firstName.trim()) {
      validationErrors.firstName = 'First name is required';
    }

    if (!form_state.lastName.trim()) {
      validationErrors.lastName = 'Last name is required';
    }

    if (!form_state.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(form_state.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!form_state.address.trim()) {
      validationErrors.address = 'Address is required';
    }

    if (!form_state.zipcode.trim()) {
      validationErrors.zipcode = 'Zipcode is required';
    }

    if (!form_state.form_state.trim()) {
      validationErrors.form_state = 'form_state is required';
    }

    if (!form_state.city.trim()) {
      validationErrors.city = 'City is required';
    }

    return validationErrors;
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  return (
    
    <div className="container-flude bg-black">
    <form className="container signup-form text-white p-3 rounded w-50" onSubmit={handleSubmit}>
      <h2 className="mb-3 text-center">Signup Form</h2>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className={`form-control rounded-pill form-control ${errors.firstName ? 'is-invalid' : ''}`}
            style={{ outline: '2px solid black' }}
            id="firstName"
            name="firstName"
            value={form_state.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className={` form-control rounded-pill form-control ${errors.lastName ? 'is-invalid' : ''}`}
            style={{ outline: '2px solid black' }}
            id="lastName"
            name="lastName"
            value={form_state.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className={` form-control rounded-pill form-control ${errors.email ? 'is-invalid' : ''}`}
          style={{ outline: '2px solid black' }}
          id="email"
          name="email"
          value={form_state.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className={` form-control rounded-pill form-control ${errors.password ? 'is-invalid' : ''}`}
          style={{ outline: '2px solid black' }}
          id="password"
          name="password"
          value={form_state.password}
          onChange={handleChange}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address:
        </label>
        <input
          type="text"
          className={` form-control rounded-pill form-control ${errors.address ? 'is-invalid' : ''}`}
          style={{ outline: '2px solid black' }}
          id="address"
          name="address"
          value={form_state.address}
          onChange={handleChange}
        />
        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="zipcode" className="form-label">
            Zipcode:
          </label>
          <input
            type="text"
            className={` form-control rounded-pill form-control ${errors.zipcode ? 'is-invalid' : ''}`}
            style={{ outline: '2px solid black' }}
            id="zipcode"
            name="zipcode"
            value={form_state.zipcode}
            onChange={handleChange}
          />
          {errors.zipcode && <div className="invalid-feedback">{errors.zipcode}</div>}
        </div>
        <div className="col">
          <label htmlFor="form_state" className="form-label">
            form_state:
          </label>
          <input
            type="text"
            className={` form-control rounded-pill form-control ${errors.form_state ? 'is-invalid' : ''}`}
            style={{ outline: '2px solid black' }}
            id="form_state"
            name="form_state"
            value={form_state.form_state}
            onChange={handleChange}
          />
          {errors.form_state && <div className="invalid-feedback">{errors.form_state}</div>}
        </div>
        <div className="col">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            className={` form-control rounded-pill form-control ${errors.city ? 'is-invalid' : ''}`}
            style={{ outline: '2px solid black' }}
            id="city"
            name="city"
            value={form_state.city}
            onChange={handleChange}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Skills:</label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            style={{ outline: '2px solid black' }}
            id="html"
            name="html"
            value="html"
            checked={form_state.skills.includes('html')}
            onChange={handleSkillChange}
          />
          <label className="form-check-label" htmlFor="html">
            HTML
          </label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            style={{ outline: '2px solid black' }}
            id="css"
            name="css"
            value="css"
            checked={form_state.skills.includes('css')}
            onChange={handleSkillChange}
          />
          <label className="form-check-label" htmlFor="css">
            CSS
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            style={{ outline: '2px solid black' }}
            id="javascript"
            name="javascript"
value="javascript"
            checked={form_state.skills.includes('javascript')}
            onChange={handleSkillChange}
          />
          <label className="form-check-label" htmlFor="javascript">
            JavaScript
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            style={{ outline: '2px solid black' }}
            id="bootstrap"
            name="bootstrap"
            value="bootstrap"
            checked={form_state.skills.includes('bootstrap')}
            onChange={handleSkillChange}
          />
          <label className="form-check-label" htmlFor="bootstrap">
            Bootstrap
          </label>
        </div>
      </div>
      <Button className="rounded-pill" variant="light" type="submit">
              Submit
            </Button>
    </form>
  </div>
  );
};

export default Signup;
