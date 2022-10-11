import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext';

const formDataMsg = {
   msg: '',
}

export const SendMessage = () => {
   const { socket } = useContext(SocketContext);
   const { auth } = useContext(AuthContext);
   const { chatState } = useContext(ChatContext)

   const { onInputChange, msg, resetForm } = useForm(formDataMsg);

   const onSubmit = (e) => {
      e.preventDefault();

      if ([msg].includes('')) return;

      resetForm();

      socket.emit('personal-msg', {
         from: auth.uid,
         to: chatState.activeChat,
         message: msg
      });

   }

   return (
      <form onSubmit={onSubmit} autoComplete='off' >
         <div className="type_msg row">
            <div className="input_msg_write col-sm-9">
               <input
                  type="text"
                  className="write_msg"
                  placeholder="Mensaje..."
                  name='msg'
                  onChange={onInputChange}
                  value={msg}
               />
            </div>
            <div className="col-sm-3 text-center">
               <button className="msg_send_btn mt-3" type="submit">
                  Enviar
               </button>
            </div>
         </div>
      </form>
   )
}

