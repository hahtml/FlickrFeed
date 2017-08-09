import React, { Component } from 'react';
import { SearchBar, Grid } from '../containers';

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
