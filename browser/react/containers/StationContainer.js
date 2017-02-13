import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils.js';
import { toggleSong } from '../action-creators/player'

const filterSongsByGenre = (songsArray, genreName) => {
	const filteredSongs = songsArray.filter(function(song) {
		return song.genre === genreName;
	});

	filteredSongs.map(convertSong);
	
	return filteredSongs;
}

const StationContainer = connect( 
	//mapStateToProps
	 (state, ownProps) => {
        const genreName = ownProps.routeParams.genreName;
	 	return {
	 		genreName: genreName,
	 		songs: filterSongsByGenre(state.songs, genreName),
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
)(Station);

export default StationContainer;