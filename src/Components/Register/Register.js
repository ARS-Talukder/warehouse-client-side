import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        signInWithGoogle();
       

    }
    return (
        <div className="App">
            <h2 className='text-primary mt-2'>Create Your New Account</h2>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                {
                    loading&& <p>loading...</p>
                }
                <p className='text-start'>Already have an account? <Link to='/login'>Login</Link></p>
                <Button onClick={async () => { await sendEmailVerification(); alert('Sent email'); }} variant="primary" type="submit">
                    Register
                </Button>
                <h5 className='mt-2'>OR</h5>
                <div className='mt-2'>
                    <button className='google-btn'>Sign In With Google</button>
                </div>
            </Form>
            
        </div>
    );
};

export default Register;