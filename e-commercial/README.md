# Building a E-commercial website
## SetUp components
- pages
  - HomePage
  - ShopPage
  - SignInPage
- basic components
  - Button
  - Directory
  - FormInput
  - Header
- set up firebase to store data
- complete login with Google account and sign up
## Decide where state lives

## Add Redux to manage state
  - Provider with store in index.js
  - rootReducer -> userReducer -> setUserAction 
  - implement with components -> connect -> mapStateToProps and mapDispatchToProps

### Add Redirect to homepage if user already sign in 
### Add UserActionTypes as constant to improve code quality

## Build Cart functionality
  - add CartIcon into Header
  - add CartDropDown into Header
  - Hide or Show dropdown based on clicking the CartIcon

### Add cartReducer to toggle the dropDown 
  - rootReducer -> cartReducer -> toggleCartHidden
  - connect -> mapDispatchToProps with CartIcon
  - connect -> mapStateToProps with Header

### Add CartItem into cartReducer
  - add addItem action into reducer
  - mapDispatchToProps to CollectionItem
