import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Loader from "react-loader-spinner";
import './Home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <Product product={product}></Product>)
                }
                <Loader className="loader"
                    type="BallTriangle"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    timeout={250}
                />
            </div>
        </div>
    );
};

export default Home;