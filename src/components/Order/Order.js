import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Loader from "react-loader-spinner"; 

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderedProducts, setOrderedProducts] = useState([])
    const { email } = loggedInUser

    useEffect(() => {
        console.log(email)
        fetch(`https://blueberry-custard-81521.herokuapp.com/orderProduct/${email}`)
            .then(res => res.json())
            .then(data => filteredOrder(data))
    }, [])

    const filteredOrder = (data) => {
        const filterData = data.filter((order) => order.email == loggedInUser.email)
        setOrderedProducts(filterData)
    }
    return (
        <div className="container mt-5">
            <Loader className="loader" type="BallTriangle" color="#00BFFF" height={150} width={150} timeout={250} />
            
              
                
                    <Table className="text-dark text-center" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Product Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderedProducts.map(pd=>
                                <tr> 
                                    <td>{pd.name}</td>
                                    <td>{pd.price}</td>
                                    <td>1</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
            
        </div>
    );
};

export default Order;