import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

export default function Chose_one() {
    return (
        <div className='container d-flex justify-content-center text-center my-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Link to='/login'><Button variant="outline-primary">Login</Button></Link>{' '}
                    <Link to='/register'><Button variant="outline-primary">Register here</Button></Link>
                </Card.Body>             
            </Card>
        </div>
    )
}
