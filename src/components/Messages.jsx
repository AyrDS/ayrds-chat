import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SendMessage, IncomingMessage, OutgoingMessage } from './';

export const Messages = () => {

   const { chatState } = useContext(ChatContext);
   const { messages } = chatState;
   const { auth } = useContext(AuthContext);
   const { uid } = auth;

   return (
      <div className="mesgs">
         <div className="msg_history" id="messages-scroll">
            {
               messages.map(msg => (
                  (msg.to === uid)
                     ? <IncomingMessage key={msg._id} msg={msg} />
                     : <OutgoingMessage key={msg._id} msg={msg} />
               ))
            }
         </div>

         <SendMessage />
      </div>
   )
}
