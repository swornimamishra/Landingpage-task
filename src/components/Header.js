import React, { useState } from 'react';
import '../App.css';

function Header({ style, text }) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage(''); // Clear any previous error message
        setSuccessMessage(''); // Clear any previous success message
    };

    const handleSubmit = () => {
        // Basic email validation
        if (!email.trim()) {
            setErrorMessage('Email Address is required.');
            setSuccessMessage(''); // Clear any previous success message
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Email Address is not valid.');
            setSuccessMessage(''); // Clear any previous success message
            return;
        }

        // If the form is valid, show success message (replace this with your form submission logic)
        setSuccessMessage('Form submission successful!');
        setErrorMessage(''); // Clear any previous error message
        setEmail(''); // Clear the email field
    };

    return (
        <>
            <div className="masthead" style={{ ...style, backgroundImage: "url('https://cdn.pixabay.com/photo/2022/03/23/10/50/sea-7086932_640.jpg')" }}>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                {/* Conditionally render the text based on whether it is provided as a prop */}
                                {text && <h2 className="mb-5">{text}</h2>}
                                {!text && <h1 className="mb-5">Generate more leads with a professional landing page!</h1>}
                                {/* Rest of the component */}
                                <form className="form-subscribe" id="contactForm">
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                className="form-control form-control-lg"
                                                id="emailAddress"
                                                type="email"
                                                placeholder="Email Address"
                                                value={email}
                                                onChange={handleChange}
                                            />
                                            {errorMessage && <div className="invalid-feedback text-danger" style={{ display: 'block' }}>{errorMessage}</div>}
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-primary btn-lg" id="submitButton" type="button" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                    {successMessage && (
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">{successMessage}</div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
