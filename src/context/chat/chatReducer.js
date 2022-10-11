import { types } from '../../types/types';

/* 
   uid: '',
   activeChat: null, //UID del usuario al que le quiero enviar mensaje
   users: [],
   messages: []
*/

export const chatReducer = (state, action) => {

   switch (action.type) {

      case types.usersLoaded:
         return {
            ...state,
            users: [...action.payload]
         }

      case types.activeChat:
         if (state.activeChat === action.payload) {
            return state
         };

         return {
            ...state,
            activeChat: action.payload
         }

      case types.newMsg:
         if (state.activeChat === action.payload.from || state.activeChat === action.payload.to) {
            return {
               ...state,
               messages: [...state.messages, action.payload]
            }
         } else {
            return state;
         }

      case types.loadMessages:
         return {
            ...state,
            messages: [...action.payload]
         }

      case types.logout:
         return {
            uid: '',
            activeChat: null,
            users: [],
            messages: []
         }

      default:
         return state;
   }
}
