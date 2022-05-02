// create store here

import {legacy_createStore as createStore ,applyMiddleware, compose} from 'redux'
import {reducer} from "./reducer"
const midllware1 = (store) =>(next)=> (action)=>{
  if(typeof action === "function"){
    return action(store.dispatch)
  }
  
 return next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(midllware1),
  // other store enhancers if any
);
export const store = createStore(reducer, enhancer);




// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
