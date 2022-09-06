import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const CountriesView = ({ countriestoshow, handleInputChange }) => {
    return(
    <table className="container text-center"> 
        <thead className="row border ">
            {countriestoshow.map(country => 
                <tr key={country.name.common} 
                    className="col-xs-4 col-sm-4 col-md-4 col-lg-4 border p-3"
                >
                    <>{country.name.common}</>
                    <tr className="row mx-auto my-auto">
                        <button
                        className="btn btn-primary btn-xs btn-block"
                        value={country.name.common}
                        onClick={handleInputChange}>
                        Show
                        </button>
                    </tr>
                </tr>)}
        </thead>
    </table>
    )
};

export default CountriesView