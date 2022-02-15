import React, { useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

   const onSubmit = (e) => {
       e.preventDefault();
       onFormSubmit(term);
   }

   return (
    <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onSubmit}>
            <label>Search for a Video</label>
            <input 
                type="text" 
                value={term}  
                onChange={(e) => setTerm(e.target.value)} 
            /> 
        </form> 
    </div>
    )
}



export default SearchBar;