import React, { Component } from 'react'
import {Tabs,Tab} from '@material-ui/core'
import Delta from './Delta'
import Covid from './Covid'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'    


class Dashboard extends Component {
state = {
  activeTabIndex: 0
};

  render() {
    const routes = ["/delta","/covid"];
    const heading = ["Delta Virus Tracker","Covid-19 Tracker"];

    return (
        <div>   
          <Router>
            <div className="shadow">    
              <Tabs value={this.state.activeTabIndex} indicatorcolor="primary" centered>   
                <Link to="/delta"><Tab value={routes[0]} label="Delta Virus" onClick={()=>this.setState({ activeTabIndex: 0 })}/></Link>
                <Link to="/covid"><Tab  value={routes[2]} label="Covid-19" onClick={()=>this.setState({ activeTabIndex: 1 })}/></Link>
              </Tabs>
            </div>
            <header className="bg-white">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {heading[this.state.activeTabIndex]}
                </h3>
              </div>
            </header>
            <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-20">
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-gray-200 rounded-lg shadow-2">
                    <Switch>
                      <Route path="/delta">
                        <Delta/>
                      </Route>
                      <Route path="/covid">
                        <Covid/>
                      </Route>
                      <Route path="/">
                        <Delta/>
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </main>
        </Router>
      </div>
    )
  }
}

export default Dashboard; 
