import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SidebarChatItem } from './';

export const Sidebar = () => {

   const { chatState } = useContext(ChatContext);
   const { users } = chatState;
   const { auth } = useContext(AuthContext);
   const { uid } = auth;

   return (
      <div className="inbox_chat">

         {
            users
               .filter(user => user.uid !== uid)
               .map(user => (
                  <SidebarChatItem
                     key={user.uid}
                     user={user}
                  />
               ))
         }

         {/* <!-- Espacio extra para scroll --> */}
         <div className="extra_space"></div>
      </div>
   )
}

