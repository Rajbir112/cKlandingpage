import React, { useState, useEffect , useRef} from 'react';
import mens from '../images/mens.jpg';
import womens from '../images/womens.jpg';
import './Content1.css'
const Content1 = () => {
  let [widthd, setwidthd] = useState("46%")
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 440) {
        setwidthd("40%");
      } else {
        setwidthd("46%");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let [details, setdetails] = useState({ name: "", email: "", phno: "" });

  const onChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    ref.current.click();
    e.preventDefault();
    const response = await fetch("http://192.168.201.126:5000/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": details.name,
        "email": details.email,
        "phno": details.phno
      })
    });

    const data = await response.json();
    console.log(data);
    
  }
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ minHeight: '20vh' }}
      >
        <p className="fw-semibold" id="Welcome">
          Receive Shopping Tokens Worth Up to $200.
        </p>
      </div>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        {/* Men's Section */}
        <div className="position-relative image-box" style={{ width: widthd, transition: 'width 0.5s ease' }}>
          <a href="https://www.calvinklein.us/en/men" target="" rel="noopener noreferrer">
            <img
              src={mens}
              alt="mwn"
              className="img-fluid w-100"
              style={{ height: '80vh', objectFit: 'cover', borderRadius: '10px' }}
            />
          </a>
          <div
            className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-2"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              pointerEvents: 'none',
            }}
          >
            Men's
          </div>
        </div>

        {/* Women's Section */}
        <div className="position-relative image-box" style={{ width: widthd, transition: 'width 0.5s ease' }}>
          <a href="https://www.calvinklein.us/en/women" target="" rel="noopener noreferrer">
            <img
              src={womens}
              alt="womens"
              className="img-fluid w-100"
              style={{ height: '80vh', objectFit: 'cover', borderRadius: '10px' }}
            />
          </a>

          <div
            className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-2"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              pointerEvents: 'none',
            }}
          >
            Women's
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ minHeight: '20vh' }}
      >
        <p className="fw-semibold" id="Welcome">
          Sign up to enjoy exclusive benefits — redeemable online or in-store.
        </p>
      </div>


      <div className="d-flex justify-content-center" style={{ marginTop: '-40px' }} >
        <button id="signup-btn" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Sign Up
        </button>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center p-1">
              <h1 className="modal-title" id="exampleModalLabel" style={{ fontSize: "40px" }}>cK</h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" name="name" placeholder="Enter your name" onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNumber" name="phno" placeholder="Enter your phone number" onChange={onChange} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" id="signup-btn" className="btn btn-secondary" ref={ref} data-bs-dismiss="modal">Close</button>
              <button type="button" id="signup-btn" className="btn btn-primary" onClick={handleSubmit} >Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
