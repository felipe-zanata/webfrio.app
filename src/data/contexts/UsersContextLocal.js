import React , { createContext, useReducer } from 'react';
import OfferData from '../OfferData';

const UserContextLocal = createContext({})
const initialState = { OfferData }

const actions = {
    
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            OfferData: [...state.OfferData, user],
        }
    },
    updateUser(state, action){
        const updated = action.payload
        return{
            ...state,
            OfferData: state.OfferData.map(u => u.id === updated.id? updated : u)
        }
    },
    deleteUser(state, action){
        const user = action.payload
        return {
            ...state,
            OfferData: state.OfferData.filter(u => u.id !== user.id)
        }    
    }
}

export const UsersProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state,action) : state
    }

   const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContextLocal.Provider value={{state, dispatch}}>
            {props.children}
        </UserContextLocal.Provider>
    )
}

export default UserContextLocal
