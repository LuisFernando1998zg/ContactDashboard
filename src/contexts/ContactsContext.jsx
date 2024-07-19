import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getAllUserReqresApi } from "../connection/Api";

const users = await getAllUserReqresApi();

export const ContactContext = createContext();

export const useContacts = () => {
    const context = useContext(ContactContext);
    if (!context) throw new Error("useContacts must be used within a ContactsProvider");
    return context;
  }

const initialState = {data:users}
console.log(initialState)

function reducer(state, action) {
    switch (action.type) {
        case 'addNewContact': {
            const newContact = { ...action.payload, id: crypto.randomUUID() };
            return {
                ...state, data: [...state.data, newContact]
            };
        }
        case 'switchFavorites': {
            return {
                ...state,
                data: state.data.map(contact =>
                    contact.id === action.payload.id
                        ? { ...contact, isFavorite: !contact.isFavorite }
                        : contact
                )
            };
        }
        case 'removeContact': {
            return {
                ...state,
                data: state.data.filter(contact => contact.id !== action.payload.id)
            };
        }
        default:
            return state;
    }
}
export const ContactsProvider = ({children}) => {
    const[{data} = state , dispatch] = useReducer(reducer, initialState)

    function addNewContact(newContact){
        dispatch({type:'addNewContact' , payload:newContact})
    }
    function switchFavorites(id){
        dispatch({type:'switchFavorites' , payload:{id}})
    }
    function removeContact(id){
        dispatch({type:'removeContact' , payload:{id}})
    }
   
  return (
    <ContactContext.Provider value={{addNewContact,data,switchFavorites,removeContact}}>
        {children}
    </ContactContext.Provider>
  )
}
