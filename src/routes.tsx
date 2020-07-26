import React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index';
import CreatePoint from './pages/CreatePoint/index';
import CreateItens from './pages/CreateItens/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={CreatePoint} path='/create-point' />
      <Route component={CreateItens} path='/create-itens' />
    </BrowserRouter>
  )
}

export default Routes;