const baseURL = import.meta.env.VITE_API_URL;

export const fetchWithoutToken = async (endpoint, data, method = 'GET') => {

   const url = `${baseURL}/${endpoint}`;

   if (method === 'GET') {
      const resp = await fetch(url);
      return await resp.json();
   } else {
      const resp = await fetch(url, {
         method,
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });

      return await resp.json();
   }

}
