import React from 'react';
import './search-input.styles.scss';
import {ReactComponent as Search} from '../../icon/search.svg';
import {connect} from 'react-redux';
import {onchangeInput} from '../../redux/search/search.action';
import {inputValueSelector} from '../../redux/search/search.selector';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
const SearchInput = ({changeInput,history,value}) => {

    const handleOnchange = (e) => {
        const name = e.target.value;
        changeInput(name);
        history.push(`/search`);
    }
    return (
        <div className ='search'>
            <div className='form-search'>
                 <input type='text' value={value} name='search' className='input-search' placeholder='Search food...' onChange={handleOnchange} autoComplete="off"/>
                 <Search className='icon-search'/>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    changeInput: name => dispatch(onchangeInput(name))
})
const mapStateToProps = createStructuredSelector({
    value: inputValueSelector
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchInput));