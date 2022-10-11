import { createContext, useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { useSocket } from '../hooks/useSocket';
import { types } from '../types/types';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

   const { socket, online, connectSocket, disconnectSocket } = useSocket(import.meta.env.VITE_SOCKET_URL);
   const { auth } = useContext(AuthContext);
   const { dispatch } = useContext(ChatContext);

   useEffect(() => {
      if (auth.logged) {
         connectSocket();
      }
   }, [auth]);

   useEffect(() => {
      if (!auth.logged) {
         disconnectSocket();
      }
   }, [auth]);

   //Escuchar los cambios de los usuarios conectados
   useEffect(() => {
      socket?.on('users-list', users => {
         dispatch({
            type: types.usersLoaded,
            payload: users
         });
      });
   }, [socket]);

   useEffect(() => {
      socket?.on('personal-msg', (msg) => {
         dispatch({
            type: types.newMsg,
            payload: msg
         });

         scrollToBottomAnimated('messages-scroll');
      });
   }, [socket]);

   return (
      <SocketContext.Provider value={{ socket, online }}>
         {children}
      </SocketContext.Provider>
   )
}