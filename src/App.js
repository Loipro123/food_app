import './App.css';
import Header from './page/header/header.component';
import {createStructuredSelector} from 'reselect';
import {list_foodSelector} from './redux/sidebar/sidebar.selector';
import {connect} from 'react-redux';
import {Switch,Route} from 'react-router-dom';
import SidebarHeader from './component/sidebar-header/sidebar-header.component';
import Login from './component/login/login.component';
import SignUp from './component/sign-up/sign-up.component';
import MainPage from './page/main-page/main-page.component';
import FoodList from './page/food-list/food-list.component';
import MainFoodList from './page/mainfood-list/mainfood-list.component';
import Search from './page/search/search.component';
import ProductPage from './page/product-page/product-page.component';
import Footer from './page/footer/footer.component';
const App = ({menuCollections}) =>{
  return (
    <div className="App">
      <Header/>
      <div className='main'>
         <div className='sidebar'>
               {menuCollections.map((item) => (
                 <SidebarHeader key={item.id} item={item}/>
               ))}
         </div>
         <div className='mainbar'>
           <div className='mainbar_body'>
              <Switch>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/signup' component={SignUp}/>
                  <Route exact path='/:mainfoodId/:subfoodId' component={FoodList}/>
                  <Route exact path='/:mainfoodId/:subfoodId/:productName' component={ProductPage}/>
                  <Route exact path='/search' component={Search}/>
                  <Route exact path='/:mainfoodId' component={MainFoodList}/>
                  <Route exact path='/' component={MainPage}/>
                </Switch>
           </div>
           <Footer/>
         </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  menuCollections: list_foodSelector
})

export default connect(mapStateToProps)(App);
