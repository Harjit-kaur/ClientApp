import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Customer from "./components/Customer";
import Store from "./components/Store";
import Product from "./components/Product";
import Sale from "./components/Sale";
import CustomerButton from "./components/CustomerButton";
import ProductButton from "./components/ProductButton";
import StoreButton from "./components/StoreButton";
import CustomerModal from "./components/CustomerModal";
import CustomerEdit from "./components/CustomerEdit";
import CustomerDelete from "./components/CustomerDelete";
import ProductModal from "./components/ProductModal";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";
import StoreModal from "./components/StoreModal";
import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/customer' component={Customer} />
        <Route path='/store' component={Store} />
        <Route path='/sale' component={Sale} />
        <Route path='/product' component={Product} />

      </Layout>
    );
  }
}
