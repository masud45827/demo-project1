import React, { useRef } from "react";
import axios from 'axios'; 
import {useNavigate} from "react-router-dom"

const Registration = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const divisionRef = useRef();
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      division: divisionRef.current.value
    };

    try {
      const res = await axios.post('http://localhost:8000/registration', formData);
      console.log(res.data);
      navigate("http://localhost:8000/")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Registration Form</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your Name" ref={nameRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your Email" ref={emailRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">Phone Number</label>
              <input type="text" className="form-control" placeholder="Enter your Phone" ref={phoneRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="divisionInput" className="form-label">Division</label>
              <input type="text" className="form-control" placeholder="Enter your Division" ref={divisionRef} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
