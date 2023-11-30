// import logo from './logo.svg';

import './App.css';
import { Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Params from './components/Params';
import SingleProduct from './components/SingleProduct';
import Mapping from './components/Mapping';
import Ternary from './components/Ternary';
import { useState } from 'react';
import StyledComponents from './components/StyledComponents';
import Counterse from './components/Counterse';
import DynamicStyles from './components/DynamicStyles';
import ChildrenProp from './components/ChildrenProp';
import Register2 from './components/Register2';
import PageNotFound from './components/PageNotFound';
import Product from './components/Product';
import SingleProductNew from './components/SingleProductNew';
import AddProduct from './components/AddProduct';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import UseReducer from './components/UseReducer';
import UseContext from './components/UseContext';






function App() {
  const[loggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
      <Routes>
      <Route exact path='*' element={<PageNotFound/>}/>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/counter' element={<Counter/>}/>
        <Route exact path='/params' element={<Params/>}/>
        <Route exact path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/mapping' element={<Mapping names={["santosh","rohit","ram"]}/>}/>
        <Route exact path='/ternary' element={<Ternary isUserLoggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route exact path='/styled-component' element={<StyledComponents/>}/>
        <Route exact path='/counterse' element={<Counterse/>}/>
        <Route exact path='/dynamic-styles' element={<DynamicStyles/>}/>
        <Route exact path='/children-prop' element={<ChildrenProp/>}/>
        <Route exact path='/register2' element={<Register2/>}/>
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path='/single-product/:id' element={<SingleProductNew/>}/>
        <Route exact path='/add-product' element={<AddProduct/>}/>
        <Route exact path='/use-memo' element={<UseMemo/>}/>
        <Route exact path='/use-callback' element={<UseCallback/>}/>
        <Route exact path='/use-reducer' element={<UseReducer/>}/>
        <Route exact path='/use-context' element={<UseContext/>}/>
      </Routes>
    </div>
  ); 
}

export default App;
