import './App.css';
import React, { useEffect} from 'react';
import {auth,createUser} from './firebase/firebase';
import Header from './page/header/header.component';
import {createStructuredSelector} from 'reselect';
import {list_foodSelector} from './redux/sidebar/sidebar.selector';
import {connect} from 'react-redux';
import {Switch,Route, Redirect} from 'react-router-dom';
import SidebarHeader from './component/side-bar/sidebar-header/sidebar-header.component';
import Login from './component/sign-in/login.component';
import SignUp from './component/sign-up/sign-up.component';
import MainPage from './page/main-page/main-page.component';
import FoodList from './page/food-list/food-list.component';
import MainFoodList from './page/mainfood-list/mainfood-list.component';
import Search from './page/search/search.component';
import ProductPage from './page/product-page/product-page.component';
import Footer from './page/footer/footer.component';
import PopupProduct from './page/popup-product/popup-product.component';
import PopupComment from './page/popup-comment/popup-comment.component';
import CheckOut from './page/check-out/check-out.component';
import {hiddenPopupSelecter,hiddenCommentSelecter} from './redux/pop-up/pop-up.selector';
import SearchDropbox from './component/search/search-dropbox/search-dropbox.component';
import {searchHiddenSelector,searchArraySelector} from './redux/search/search.selector';
import {setUserInfor} from './redux/user/user.action';
import {userSelector} from './redux/user/user.selector';

const App = ({menuCollections,popupHidden,popupComment,search_hidden,search_array,setCurrentUser,user}) =>{
  useEffect(()=> {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      }
      setCurrentUser(
        userAuth
      )
      return() => {
        unsubscribeFromAuth();
      }
   });
  },[]);

  return (
    <div className="App">
      <Header/>
      {search_hidden === true && search_array ? <SearchDropbox searchArray ={search_array}/> : null}
      <div className='main'>
         <div className='sidebar'>
               {menuCollections.map((item) => (
                 <SidebarHeader key={item.id} item={item}/>
               ))}
         </div>
         <div className='mainbar'>
           <div className='mainbar_body'>
                  <Switch>
                    <Route exact path='/login'>
                        {
                           user ? <Redirect to='/'/> : <Login/>
                        }
                    </Route>
                    <Route exact path='/signup'>
                        {
                           user ? <Redirect to='/'/>: <SignUp/>
                        }
                    </Route>
                    <Route exact path='/:mainfoodId/:subfoodId' component={FoodList}/>
                    <Route exact path='/:mainfoodId/:subfoodId/:productName' component={ProductPage}/>
                    <Route exact path='/search' component={Search}/>
                    <Route exact path='/checkout' component={CheckOut}/>
                    <Route exact path='/:mainfoodId' component={MainFoodList}/>
                    <Route exact path='/' component={MainPage}/>
                  </Switch>
          
           </div>
           <Footer/>
         </div>
      </div>
      {
        popupHidden=== true ? <PopupProduct/> : null
      }
      {
        popupComment=== true ? <PopupComment/> : null
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  menuCollections: list_foodSelector,
  popupHidden: hiddenPopupSelecter,
  popupComment: hiddenCommentSelecter,
  search_hidden: searchHiddenSelector,
  search_array: searchArraySelector,
  user: userSelector
})
const mapDispatchToProps = dispatch => 
  ({
    setCurrentUser: user => dispatch(setUserInfor(user))
  })


export default connect(mapStateToProps,mapDispatchToProps)(App);
