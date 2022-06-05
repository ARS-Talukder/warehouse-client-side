import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/manage">Manage Items</Nav.Link>
                        <Nav.Link href="/add">Add Items</Nav.Link>
                        <Nav.Link href="/my">My Items</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        {
                            user?
                            <button className='btn btn-primary' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link href="/login" className='text-warning fw-bold'>Login</Nav.Link>

                        }
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;