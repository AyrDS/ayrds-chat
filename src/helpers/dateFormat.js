export const dateFormat = date => {
   const newDate = new Date(date);

   return newDate.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
   });
}

