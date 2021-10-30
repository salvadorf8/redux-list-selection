import { combineReducers } from 'redux';
import { selectedSongReducer } from '../redux/song/song.reducer';
import songs from './song/song.data';

// const songs = () => {
//     return [
//         { title: 'No Scrubs', duration: '4:05' },
//         { title: 'Macarena', duration: '3:05' },
//         { title: 'All Star', duration: '2:05' },
//         { title: 'I want it that way', duration: '1:05' }
//     ];
// };

export default combineReducers({
    songs: songs,
    selectedSong: selectedSongReducer
});
