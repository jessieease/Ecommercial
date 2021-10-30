import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import ShopPage from './components/Pages/ShopPage';
import SignInPage from './components/Pages/SignInPage';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        currentUser: userAuth,
      });
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="body">
        <Header currentUser={this.state.currentUser}/>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInPage} />
      </div>
    );
  }
}

export default App;
