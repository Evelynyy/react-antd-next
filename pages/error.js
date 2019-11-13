import { Component } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout/Layout';

export default class extends Component {
  render() {
    return (
      <Layout>
        <p>This path({Router.pathname}) should not be rendered via SSR</p>
      </Layout>
    );
  }
}
