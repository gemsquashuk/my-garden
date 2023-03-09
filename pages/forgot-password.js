import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle form submission
        console.log(`Password reset link sent to ${email}`);
    };

    return (
        <div className="container mt-2">
            <Head>
                <title>My Online Garden - Forgot Password</title>
                <meta name="description" content="Reset your password for My Online Garden" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className="d-flex align-items-center">
                <main className="col-12 col-md-6 mx-auto justify-content-center" style={{ width: '500px' }}>
                    <p className="text-center mb-3" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1F782B', marginTop: '100px'}}>Forgot Password</p>

                    <div className="d-flex justify-content-center">
                        <Form className="d-grid" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" style={{borderColor: '#1F782B'}} value={email} onChange={(event) => setEmail(event.target.value)} required/>
                                <Form.Text className="text-muted">
                                    Enter your email address and we&apos;ll send you a link to reset your password.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{background: '#1F782B'}}>
                                Reset Password
                            </Button>

                            <Form.Text>
                                <a href="/login">Remembered your password? Sign in here.</a>
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
    )
}
