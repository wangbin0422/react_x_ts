import React from 'react';
import Layout from '../lib/Layout/Layout'
import Content from '../lib/Layout/Content';
import Footer from '../lib/Layout/Footer';
import Header from '../lib/Layout/Header';
import Aside from '../lib/Layout/Aside';

export default function() {
  return (
    <div>
      <div>
        <h2>example 1</h2>
        <Layout className='hi' style={{height: 300}}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 2</h2>
        <Layout className='hi' style={{height: 300}}>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 3</h2>
        <Layout className='hi' style={{height: 300}}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>example 4</h2>
        <Layout className='hi' style={{height: 300}}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
};