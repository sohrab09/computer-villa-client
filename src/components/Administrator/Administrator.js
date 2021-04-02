import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const routes = [

    {
        path: "/addProduct",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <AddProduct></AddProduct>
    },
    {
        path: "/manageProduct",
        sidebar: () => <div></div>,
        main: () => <ManageProduct></ManageProduct>
    }
];


const Administrator = () => {
    return (
        <div className="container">
            <Router>
                <div className="col-md-9 mt-5" style={{ display: "flex" }}>
                    <div style={{ padding: "10px", width: "30%", background: "#343a40" }}>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                                <Link to="/addProduct">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/manageProduct">ManageProduct</Link>
                            </li>

                        </ul>

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.sidebar />}
                                />
                            ))}
                        </Switch>
                    </div>

                    <div style={{ flex: 1, padding: "10px" }}>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>

    );
};

export default Administrator;