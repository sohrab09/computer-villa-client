import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Administrator from './components/Administrator/Administrator';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path="/administrator">
            <Administrator/>
          </PrivateRoute>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path="*">
            <h1>404 - Not Found!</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
