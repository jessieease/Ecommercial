import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Redirect, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import ShopPage from './components/Pages/ShopPage';
import SignInPage from './components/Pages/SignInPage';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import setCurrentUser from './redux/user/user.action';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
  
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
            })
          })
      }

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="body">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/sign-in'
          render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignInPage />
              )
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
