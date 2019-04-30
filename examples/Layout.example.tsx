import React from 'react';
import Layout from '../lib/Layout/Layout'
import Content from '../lib/Layout/Content';
import Footer from '../lib/Layout/Footer';
import Header from '../lib/Layout/Header';
import Aside from '../lib/Layout/Aside';

import './Layout.example.scss'

export default function() {
  return (
    <div>
      <div>
        <h2>example 1</h2>
        <Layout className="layout-demo">
          <Header className='a'>header</Header>
          <Content className='b'>content</Content>
          <Footer className='a'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 2</h2>
        <Layout className="layout-demo">
          <Header className="a">header</Header>
          <Layout>
            <Aside className="c">aside</Aside>
            <Content className="b">content</Content>
          </Layout>
          <Footer className="a">footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 3</h2>
        <Layout className="layout-demo">
          <Header className="a">header</Header>
          <Layout>
            <Content className="b">content</Content>
            <Aside className="c">aside</Aside>
          </Layout>
          <Footer className="a">footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 4</h2>
        <Layout className="layout-demo layout-vertical">
          <Aside className="c">aside</Aside>
          <Layout>
            <Header className="a">header</Header>
            <Content className="b">content</Content>
            <Footer className="a">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
};