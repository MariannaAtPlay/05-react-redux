import React from 'react';
import Songs from './Songs';

const songs = [{
  id: 1,
  name: "The Stars Are Out",
  genre: "Instrumental"
},
{
  id: 2,
  name: "Careless Whisper",
  genre: "Saxophone Solo"
},
{
  id: 3,
  name: "Shooting Star",
  genre: "Instrumental"
}];

function Station (props) {
    console.log('inside Station component; props= ', props);
    return (
        <div>
            <h3>{ props.genreName } Station</h3>
            <Songs 
            songs={props.songs}
            currentSong={props.currentSong}
            isPlaying={props.isPlaying}
            toggleOne={props.toggleOne}
            />
        </div>
    );
}

export default Station;