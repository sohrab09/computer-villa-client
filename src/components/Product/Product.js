import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Product.css'
import { useHistory } from 'react-router-dom';


const Product = (props) => {
    const { _id, name, imageURL, price, weight } = props.product
    const history = useHistory();
    function handleClick(id) {
        history.push(`/checkout/${id}`);
    }
    return (
        <div>
            <Card className="cardStyle shadow-sm p-2 bg-body rounded container" style={{ width: '14rem' }}>
                <div className="image-container">
                    <Card.Img className="image" variant="top" src={imageURL} />
                </div>
                <Card.Body>
                    <Card.Title className="text-dark text-center">Name: {name}</Card.Title>
                    <p className="text-dark text-center">Price: {price}</p>
                    <p className="text-dark text-center">Weight: {weight}</p>
                    <Button onClick={() => handleClick(_id)} className="text-light col justify-content-center" variant="success">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;