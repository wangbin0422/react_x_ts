import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './examples/Icon.example'

ReactDOM.render((
  <Router>
    <div>
      <header>UI</header>
      <div>
        <aside>
          <h2>组件</h2>
          <ol>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
          </ol>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
        </main>
      </div>
    </div>

  </Router>
), document.querySelector('#root'))

