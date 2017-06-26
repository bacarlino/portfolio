import Calculator from './Calculator';
import Home from './Home';
import Nav from './Nav';
import Pomodoro from './Pomodoro';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Simon from './Simon';


export default class FCC extends React.Component {
  render() {
    return (
      <Router>
        <div className="react-container">
          <h4>ReactJS Projects</h4>
          <Nav />
          <Switch>
            {/* <Route exact path='/portfolio/react' component={Home} /> */}
            <Route path='/portfolio/react/calculator' component={Calculator} />
            <Route path='/portfolio/react/pomodoro' component={Pomodoro} />
            <Route path='/portfolio/react/simon' component={Simon} />
            {/* <Route  component={Home} /> */}
            {/* <Route path='/tictactoe' />  */}
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>

        </div>
      </Router>
    );
  }
}
