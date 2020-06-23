// Action creator

export const selectSong = (song) => {
    return {
        // Return an action type is required but payload is optional
            type: 'SONG_SELECTED',
            PAYLOAD: song
    };
};

// something new... Named Export, which allows you to export different functions in a single file, export default will not be specified