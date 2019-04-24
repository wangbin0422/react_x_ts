import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './examples/Icon.demo';
import ButtonExample from './examples/Button.example';
import DialogExample from './examples/Dialog.example';
import LayoutExample from './examples/Layout.example';
import Content from './lib/Layout/Content';
import Aside from './lib/Layout/Aside';
import Header from './lib/Layout/Header';
import Layout from './lib/Layout/Layout';
import Footer from './lib/Layout/Footer';

import './example.scss'


ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header">UI</Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}></Route>
          <Route path="/button" component={ButtonExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; ui
      </Footer>
    </Layout>

  </Router>
), document.querySelector('#root'));

