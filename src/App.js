import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import TopNavigation from "./pages/TopNavigation"
import Footer from "./pages/Footer"

function App() {
  
  return (
      <Router>
        <TopNavigation/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/category">
            <CategoryPage/>
          </Route>
          <Route exact path="/detail">
            <ProductDetailPage/>
          </Route>
          <Route exact path="/cart">
            <CartPage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
