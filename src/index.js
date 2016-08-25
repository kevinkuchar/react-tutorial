import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBJtP0huRFyeAuBjfWlzTIg6DMDXNKqzYs';

// Create a new component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Put component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));