import React from 'react';
import './search-dropbox.styles.scss';
import {connect} from 'react-redux';
import {targetDrop} from '../../../redux/search/search.action';

const SearchDropbox = ({searchArray,targetItem}) => {
    const guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    return(
    <div className='searchDrop'>
         {
             searchArray.map(item => <div key={guid()} className='search_item' onClick={() => targetItem(item.title)}>{item.title}</div>)
         }
    </div>
)

}
const mapDispatchToState = dispatch => ({
    targetItem: title => dispatch(targetDrop(title))
})
export default connect(null,mapDispatchToState)(SearchDropbox);