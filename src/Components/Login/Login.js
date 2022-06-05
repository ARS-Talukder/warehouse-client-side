import React, { useState } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, error1] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (error1) {

        return (
            <div>
                <h2 className='text-danger fw-bold text-center'>This email has no account</h2>
                <h2 className='text-danger fw-bold text-center'>Please Reload Page</h2>
            </div>
        );
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="App">
            <h2 className='text-primary mt-2'>Please Login Here</h2>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <p>{error1?.message}</p>
                {
                    loading&& <p>loading...</p>
                }
                
                <p className='text-start'>New at ARS Electronics? <span><Link to='/register'>create account</Link></span> </p>
                <p className='text-start'>Forget password?<button className='text-primary reset-btn' onClick={async () => { await sendPasswordResetEmail(email); alert('Sent email'); }}>reset password</button></p>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <h5 className='mt-2'>OR</h5>
            <div className='mt-2'>
                <button onClick={() => signInWithGoogle()} className='google-btn'>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;