import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class Navigation extends Component {
    handleClick = (event) => {
        event.preventDefault();
        localStorage.removeItem('user');
        window.location.href = "/";
    }

    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="/">
                    <img src={logo} alt="logo" width="42" height="auto" style={{ transform: "rotate(45deg)" }} />
                </Link>
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/wallet">Wallet</Link>
                    <Nav.Link href="#">Test</Nav.Link>
                    {user ? (
                        <Nav.Link href="/" onClick={this.handleClick}>Logout</Nav.Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user ? (
                        <Navbar.Text className="justify-content-end">
                            Hello, {user.first_name}
                        </Navbar.Text>
                    ) : (
                        <Navbar.Text className="justify-content-end">
                            You must be looged in to send money
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
