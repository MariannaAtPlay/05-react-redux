import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

// export default class extends Component {

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }

const AlbumContainer = connect( 
	//mapStateToProps
	 (state, ownProps) => {
          return {
            selectedAlbum: state.albums.selected,
            currentSong: state.player.currentSong,
            isPlaying: state.player.isPlaying
	 	};
	 },
	 
	 //mapDispatchToProps
	 (dispatch, ownProps) => {
	 	return { 
            toggleOne: (song, list) => {
            	dispatch(toggleSong(song,list))
            }      
         };
	 }
)(Album);

export default AlbumContainer;