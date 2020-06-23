import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// React-Redux - creates two components (Provider, and Connect (implemented by React-Redux)).  We will create instances of these two to use
//          Provider: After a STORE is created, we will pass it to the Provider as a props, provider will be rendered at the very very top of the hiearchy, even above App.js.  
//          Connect component: We create an instance right above each component that needs to access data saved in the store.  
//                  Connect communicates with the Provider (not through a props system, but through context system)
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;