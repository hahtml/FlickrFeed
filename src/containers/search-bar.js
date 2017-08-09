import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terms: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({terms: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // fetch data from flickr here
        this.props.fetchData(this.state.terms);
        this.setState({terms: ''});
    }

    render() {
        return(
            <div className="row search-bar">
                <div className="col-lg-12">
                    <form onSubmit={this.onFormSubmit} className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for..."
                            value={this.state.terms}
                            onChange={this.onInputChange}
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Go!</button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);