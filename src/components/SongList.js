import React, { Component } from 'react';
//redux configuration - 
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    //helper function
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render () {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
};

// the prop state contains entire list from the store
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

//The connect function takes the action creator object and does a special 
//operation on all the functions inside the object, it actually wraps them up inside another function
//when we call the new function, the connect function is going to automatically call the action creator
//its going to get the action that is returned, and automatically throw it into the dispatch for us.
export default connect(mapStateToProps, { selectSong })(SongList);