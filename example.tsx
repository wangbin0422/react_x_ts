import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './examples/Icon.example'
import ButtonExample from './examples/Button.example'
import DialogExample from './examples/Dialog.example'

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
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
          </ol>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/button" component={ButtonExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
        </main>
      </div>
    </div>

  </Router>
), document.querySelector('#root'))

