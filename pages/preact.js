import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import ActiveLink from '../components/ActiveLink';

export default class Preact extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/developit/preact');
    const json = await res.json(); // better use it inside try .. catch
    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <div>
        <p>Preact has {this.props.stars} ⭐</p>
        <ActiveLink href="/">I bet Next.js has more stars (?)</ActiveLink>
      </div>
    );
  }
}
