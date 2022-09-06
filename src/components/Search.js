import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({ newSearch, handleInputChange }) => {
    return (
        <div  >
            <div className="container p-3 flex text-center flex-column table border bg-secondary text-light">
                Search database by country name: <input 
                                                    value={newSearch} 
                                                    onChange={handleInputChange}
                                                />
                
            </div>
        </div>
        
    );
};

export default Search