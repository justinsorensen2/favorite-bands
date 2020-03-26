import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TheBeatles from './pages/TheBeatles'
import Metallica from './pages/Metallica'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PinkFloyd from './pages/PinkFloyd'

const App = () => {
  return (
    <Router>
      <header className="Header">
        <nav>
          <ul>
            <li>
              <button className="Hero">
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button className="Hero">
                <Link to="/TheBeatles">The Beatles</Link>
              </button>
            </li>
            <li>
              <button className="Hero">
                <Link to="/Metallica">Metallica</Link>
              </button>
            </li>
            <li>
              <button className="Hero">
                <Link to="/PinkFloyd">Pink Floyd</Link>
              </button>
            </li>
          </ul>
        </nav>
        <sub>
          <h1>My Favorite Bands</h1>
        </sub>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/TheBeatles" component={TheBeatles}></Route>
        <Route exact path="/Metallica" component={Metallica}></Route>
        <Route exact path="/PinkFloyd" component={PinkFloyd}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
