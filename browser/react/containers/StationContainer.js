import {connect} from 'react-redux';
import Station from '../components/Station';

const StationContainer = connect( 
	//mapStateToProps
	 (state, ownProps) => {
        console.log('inside StationContainer, mapStateToProps; ownProps= ', ownProps);
        console.log('inside StationContainer, mapStateToProps; state= ', state)
	 	return {
	 		songs: state.songs,
            currentSong: state.player.currentSong,
            isPlaying: state.player.isPlaying  
	 	};
	 },
	 
	 //mapDispatchToProps
	 (dispatch, ownProps) => {
	 	return {
            toggleOne: () => {}      
         };
	 }
)(Station);

export default StationContainer;