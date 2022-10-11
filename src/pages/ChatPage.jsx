import { useContext } from 'react';
import { ChatSelect, InboxPeople, Messages } from '../components';
import { ChatContext } from '../context/chat/ChatContext';
import '../css/chat.css';


export const ChatPage = () => {

   const { chatState } = useContext(ChatContext);
   const { activeChat } = chatState;

   return (
      <div className="messaging">
         <div className="inbox_msg">
            <InboxPeople />

            {
               activeChat
                  ? <Messages />
                  : <ChatSelect />
            }
         </div>
      </div>
   )
}

