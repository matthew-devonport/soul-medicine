import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home'
import Contact from './Contact';

class App extends React.Component {
 

  render () {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}


export default App
