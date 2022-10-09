import { SendMessage, IncomingMessage, OutgoingMessage } from './';

export const Messages = () => {
   return (
      <div className="mesgs">
         <div className="msg_history">

            <IncomingMessage />

            <OutgoingMessage />
         </div>

         <SendMessage />
      </div>
   )
}
