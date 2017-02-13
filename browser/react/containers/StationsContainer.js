import {connect} from 'react-redux';
import Stations from '../components/Stations';

function convertSongsToStations(songsArray) {
	const stations = {};

	songsArray.forEach(song => {
		const genre = song.genre;
		stations[genre] = stations[genre] || [];
		stations[genre].push(song)
	})

	return stations;
};

const StationsContainer = connect( 
	//mapStateToProps
	 state => {
	 	return {
	 		stations: convertSongsToStations(state.songs)
	 	};
	 },
	 
	 //mapDispatchToProps
	 dispatch => {
	 	return {};
	 }
)(Stations);

export default StationsContainer;
