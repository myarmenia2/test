import { createStore } from "redux";

const reducer = function(state, action){
  console.log(state, action);
  if(action.type == "CHANGE_USERNAME"){
    return Object.assign(state, {
      username : action.username
    });
  }
  return state;
}

const store = createStore(reducer, {
  username: "anun",
  age : 22
});
store.subscribe(()=> {
  console.log("store changed", store.getState())
});

store.dispatch({
type: "CHANGE_USERNAME",
username: 'Simon1111'
})

setTimeout(()=>{
  store.dispatch({type: "CHANGE_USERNAME", username: 'Simon1'})
}, 1000)

const test1=55555555


export default store
