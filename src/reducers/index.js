// Reducers
// Definitions
// combineReducers({}): function to create an object with purpose to wire up all the Reducers
// createStore(): Function and with the above object as a parameter, will create our application STATE object known as the (STORE)
// Store: is an object with the responsibility to do the following
//      hold application STATE
//      allows access (getState())
//      allow update (disptch(action))
//      register listeners (subscribe(listener))
//      unregistering of listeners

// Redux Cycle
// Action Creator: is a function that is going to produce an action object
// Action: (indicates what happened) is a plain JavaScript Object created by an ActionCreator (with two properties) and fed to a dispatcher.
//      TYPE (indicates what the action will perform) - string constant - once app is large enough, may move to separate module
//      PAYLOAD (is information that is sent from your application to the store) 
// Reducers: (indicates how the application's state changes) is a simple function which, based on an action, responds to create a new updated application state


//Dispatch(): when called, will perform an entire of a Redux cycle (mentioned above)
//NOTE: console.log(store.getState()) displays the entire application STATE object
//NOTE: there is no way you can manually modify the application STATE without the use of dispatch()



// People dropping off a form (Action Creator)


import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '3:05'},
        {title: 'All Star', duration: '2:05'},
        {title: 'I want it that way', duration: '1:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.PAYLOAD;
    }
    
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});
