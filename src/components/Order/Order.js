import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderedProducts, setOrderedProducts] = useState([])
    const {email} = loggedInUser

    useEffect(()=>{
        console.log(email)
        fetch(`http://localhost:5000/orderProduct/${email}`)
            .then(res => res.json())
            .then(data => filteredOrder(data))
    }, [])

    const filteredOrder = (data) =>{
        const filterData = data.filter((order) => order.email == loggedInUser.email)
        setOrderedProducts(filterData)
    }
    return (
        <div>
            {
                orderedProducts.map(pd => <p>Name: {pd.name}</p>)
            }
        </div>
    );
};

export default Order;