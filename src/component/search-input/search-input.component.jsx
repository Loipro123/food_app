import React from 'react';
import './search-input.styles.scss';
import {ReactComponent as Search} from '../../icon/search.svg';

const SearchInput = () => (
    <div className ='search'>
        <form className='form-search'>
             <input type='text' name='search' className='input-search' placeholder='Search food...'/>
             <Search className='icon-search'/>
        </form>
    </div>
);

export default SearchInput;