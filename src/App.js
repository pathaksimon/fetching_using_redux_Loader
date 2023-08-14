import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Services/Store/index'
import Home from './components/Home'
import Details from './components/Details'

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs/:id" component={Details} />
      </Switch>
    </Provider>
  )
}

export default App
