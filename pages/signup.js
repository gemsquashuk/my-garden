import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from "next/link";

export default function SignUp() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passwordsMatch) {
            // TODO: handle form submission
            console.log('Form submitted successfully!');
        } else {
            console.log('Passwords do not match.');
        }
    };

    return (
        <div className="container mt-2">
            <Head>
                <title>My Online Garden - Sign Up</title>
                <meta name="description" content="Sign up for My Online Garden" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className="d-flex align-items-center">
                <main className="col-12 col-md-6 mx-auto justify-content-center" style={{ width: '500px', marginTop: '50px' }}>
                    <p className="text-center mb-3" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1F782B'}}>Sign Up</p>

                    <div className="d-flex justify-content-center">
                        <Form className="d-grid" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" style={{borderColor: '#1F782B'}} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" style={{borderColor: '#1F782B'}} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" style={{borderColor: '#1F782B'}} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" style={{borderColor: '#1F782B'}} value={password} onChange={handlePasswordChange} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" style={{borderColor: '#1F782B'}} value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                                {!passwordsMatch && <Form.Text style={{color: 'red'}}>Passwords do not match.</Form.Text>}
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{background:'#1F782B', marginTop: '50px'}} disabled={!passwordsMatch}>
                                Sign Up
                            </Button>
                            <Form.Text>
                                Already have an account? <Link href="/login">Sign in here.</Link>
                            </Form.Text>
                        </Form>
                    </div>

                    <style jsx>{`
        @media (max-width: 767px) {
          main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
                </main>
            </div>
        </div>
    )}
