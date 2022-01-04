import {createStore} from 'redux'

//reducer - pure function will not use side effects like api calls , localstorage calls
const counterReducer = (state={counter:0}, action)=>{
    if(action.type == "INCREMENT"){
        return {
            counter:state.counter+1
        }
    } else if(action.type == "DECREMENT"){
        return {
            counter:state.counter-1
        }
    }
    return {
        counter:0
    }
}

//store
const store = createStore(counterReducer)

export default store;