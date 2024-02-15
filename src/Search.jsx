
import React, { useState } from 'react';

function Search({ search, setSearch, handleSearch }) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-engine">
            <input
                type="text"
                placeholder="Enter City Name"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;