import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/users.reducers";

import {
  postAdReducer,
  allItemsReducer,
  detailsReducer,
  sellerItemsReducer,
  updateItemToSoldReducer,
  deleteItemReducer,
  itemInterestedPeopleReducer,
  myInterestReducer,
  showInterestReducer,
} from "./reducers/sell.reducer";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  postAd: postAdReducer,
  allItems: allItemsReducer,
  detailsInfo: detailsReducer,
  seller: sellerItemsReducer,
  markSold: updateItemToSoldReducer,
  delete: deleteItemReducer,
  people: itemInterestedPeopleReducer,
  trackInterest: myInterestReducer,
  showInterest: showInterestReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userRegister: { userInfo: userInfoFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
