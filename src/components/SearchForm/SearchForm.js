import './SearchForm.css';
import React from 'react';

function SearchForm(props) {

    const [searchTerm, setSearchTerm] = React.useState('');
    const buttonRef = React.useRef(null);

    const changeSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        buttonRef.current.classList.add('search__button-clicked');
        //send search to api
        props.onSubmit(searchTerm)
    }

    return (
      <form className="search" onSubmit={submitSearch}>
        <input value={searchTerm} onChange={changeSearch} className="search__input" type="text" placeholder="Enter topic" />
        <button ref={buttonRef} type="submit" className="search__button">Search</button>
      </form>
    )
  }
  
  export default SearchForm;