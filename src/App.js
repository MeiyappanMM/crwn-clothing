import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SigninandSignup from './pages/signinandsignuppage/signinandsignuppage.component';
import Header from './components/header/header.component';

import {auth} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount()     {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
      return (
        <div>
          <BrowserRouter>
            <Header currentUser = {this.state.currentUser}/>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/signin' component={SigninandSignup}/>
              <Route exact path='/shop' component={Shop}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  
}

export default App;
