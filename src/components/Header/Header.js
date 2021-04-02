import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/"><strong>Computer Villa</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/order">Order</Nav.Link>
                        <Nav.Link as={Link} to="/administrator">Administrator</Nav.Link>
                    </Nav>
                    <Button variant="success" as={Link} to="/login">{loggedInUser.userName || loggedInUser.displayName ? loggedInUser.userName || loggedInUser.displayName : "Login"}</Button>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;