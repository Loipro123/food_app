import React from 'react';
import './search.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {searchArraySelector} from '../../redux/search/search.selector';
import {cleanInput} from '../../redux/search/search.action';
import CartItem from '../../component/card-item/card-item.component';
class Search extends React.Component {
    componentWillUnmount(){
        this.props.cleanValue();
    }
    guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    render(){
        return (
            <div className='search_page'>
               {
                   this.props.arraySearch.length      > 0 ? (this.props.arraySearch.map((item) => <CartItem key={this.guid()} item={item}/>)):
                   (<h2 className='searchStatus'>There is no items matched</h2>)
               
               }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector(
    {
        arraySearch: searchArraySelector,
        
    }
)

const mapDispatchToProps = dispatch => ({
    cleanValue: ()=> dispatch(cleanInput())
})

export default connect(mapStateToProps,mapDispatchToProps)(Search);