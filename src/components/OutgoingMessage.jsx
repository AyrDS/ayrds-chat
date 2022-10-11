import { dateFormat } from '../helpers/dateFormat';

export const OutgoingMessage = ({ msg }) => {
   return (
      <div className="outgoing_msg">
         <div className="sent_msg">
            <p>{msg.message}</p>
            <span className="time_date"> {dateFormat(msg.createdAt)}</span>
         </div>
      </div>
   )
}
