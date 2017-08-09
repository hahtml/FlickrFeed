import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import Grid from '../containers/grid';

export default class App extends Component {
  render() {
    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Grid />
            </div>
        </div>
    );
  }
}
