import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Administrator = () => {
    return (
        <div className="container">
            <AddProduct></AddProduct>
            <ManageProduct></ManageProduct>
        </div>
    );
};

export default Administrator;