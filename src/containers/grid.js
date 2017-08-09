import React, { Component } from 'react';
import { connect } from 'react-redux';
import MDSpinner from "react-md-spinner";

import GridItem from '../components/grid-item';


class Grid extends Component {
    constructor(props) {
        super(props);

        this.renderGrid = this.renderGrid.bind(this);
    }

    renderGrid() {
        if (this.props.items !== null) {
            return this.props.items.map((item) => {
                return (
                    <GridItem imgUrl={item.media.m} imgTitle={item.title} />
                )}
            )
        }
    }

    render() {
        if (this.props.loading) {
            return (
                <div className="spinner">
                    <MDSpinner />
                </div>
            );
        }
        return (
            <div className="grid">
                {this.renderGrid()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.flickr.data,
        loading: state.flickr.loading,
        error: state.flickr.error
    };
}

export default connect(mapStateToProps, null)(Grid);