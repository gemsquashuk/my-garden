import { Button, Form } from 'react-bootstrap';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from "next/link";

export default function Login() {
    return (
        <div className="container mt-2">
            <Head>
                <title>My Online Garden</title>
                <meta name="description" content="Login for My Online Garden" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className="d-flex align-items-center">
                <main className="col-12 col-md-6 mx-auto justify-content-center" style={{ width: '500px' }}>
                    <p className="text-center mb-3" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1F782B', marginTop: '100px'}}>Sign In</p>

                    <div className="d-flex justify-content-center">
                        <Form className="d-grid" style={{ maxWidth: '500px' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" style={{borderColor: '#1F782B'}}/>
                                <Form.Text className="text-muted">
                                    We&apos;ll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" style={{borderColor: '#1F782B'}}/>
                                <Form.Text >
                                    <Link href="/forgot-password">Forgot your password?</Link>
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{background: '#1F782B'}}>
                                Sign In
                            </Button>

                            <Form.Text>
                                <Link href="/signup">Don&apos;t have an account? Sign up here.</Link>
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
