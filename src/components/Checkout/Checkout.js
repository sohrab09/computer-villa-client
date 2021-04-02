import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="container mt-5">
            <Table>
                <thead>
                    <tr>
                        <th>Description</th>
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
                </tbody>
            </Table>
            <Button className="float-right" variant="primary">Checkout</Button>
        </div>
    );
};

export default Checkout;