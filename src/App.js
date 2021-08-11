import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VisFileSelect from "./Components/nove/VisFileSelect";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/upload">Upload image</Link>
                </li>
                <li>
                  <Link to="/listdb">List DB Images</Link>
                </li>
                <li>
                  <Link to="/multipage">Multi Page Image</Link>
                </li>
                <li>
                  <Link to="/showallimgs">Show whole groups Images</Link>
                </li>
                <li>
                  <Link to="/showmyimgs">Show my Images</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/showmyimgs">
                <VisFileSelect />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
