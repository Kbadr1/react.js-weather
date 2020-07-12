import React from 'react'

const SearchForm = ({ search, updateSearch, getSearchResult }) => {
    return (
        <form className="d-flex justify-content-center" onSubmit={getSearchResult}>
            <input type="text" placeholder="City Name" value={search} onChange={updateSearch}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default SearchForm;