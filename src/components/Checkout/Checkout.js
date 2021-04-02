import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";
import { useContext } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {name, price, quantity} = product

    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleCheckOut = () => {
        const {email} = loggedInUser
        const orderedInfo = {name, price, quantity, email}
        const url = `http://localhost:5000/addedProduct`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderedInfo)
        })
        .then(res => console.log('server side response', res))

    }

    return (
        <div className="container mt-5">
            <Loader className="loader" type="BallTriangle" color="#00BFFF" height={150} width={150} timeout={250} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </Table>
            {/* <button onClick={handleCheckOut} className="checkoutBtn">Checkout</button> */}
            <Button onClick={handleCheckOut} className="float-right" variant="success">Checkout</Button>
        </div>
    );
};

export default Checkout;