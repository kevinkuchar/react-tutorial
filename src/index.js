import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
const App = () => {
    return <div>Hi!</div>
}

// Put component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));