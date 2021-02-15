import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

export const Nav = (props) => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searching');
    }

    return <Navbar bg="light" variant="light" sticky="top">
        <Form inline className="form-inline my-2 my-lg-0" >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="secondary" className="my-2 my-sm-0" onClick={handleSearch} >Search</Button>
        </Form>
    </Navbar>
}