import { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchWithToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';

export const SidebarChatItem = ({ user }) => {
   const { name, online, uid } = user;

   const { chatState, dispatch } = useContext(ChatContext);
   const { activeChat } = chatState;

   const handleClick = async () => {
      dispatch({
         type: types.activeChat,
         payload: uid
      });

      const resp = await fetchWithToken(`messages/${uid}`);
      dispatch({
         type: types.loadMessages,
         payload: resp.messages
      });

      scrollToBottom('messages-scroll');
   }

   return (
      <div
         className={`chat_list ${uid === activeChat ? 'active_chat' : ''}`}
         onClick={handleClick}
      >
         <div className="chat_people">
            <div className="chat_img">
               <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="chat_ib">
               <h5>{name}</h5>
               {
                  online
                     ? <span className="text-success">Online</span>
                     : <span className="text-danger">Offline</span>
               }
            </div>
         </div>
      </div>
   )
}
