import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProductsList from './components/pages/ProductsList'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import ProductDetails from './components/products/ProductDetails'
import ProductEdit from './components/products/ProductEdit'
import ProductsProvider from './context/products/ProductsProvider'

import './App.css'

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={ProductsList} />
              <Route exact path='/about' component={About} />
              <Route exact path='/product/:number' component={ProductDetails} />
              <Route exact path='/product/:number/edit' component={ProductEdit} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </ProductsProvider>
  )
}

export default App
