import { createContext, useReducer } from 'react';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();
const { Provider } = ChatContext;

const initialState = {
   uid: '',
   activeChat: null, //UID del usuario al que le quiero enviar mensaje
   users: [],
   messages: []
}

export const ChatProvider = ({ children }) => {

   const [chatState, dispatch] = useReducer(chatReducer, initialState);


   return (
      <Provider value={{
         chatState,
         dispatch
      }} >
         {children}
      </Provider>
   )
}
