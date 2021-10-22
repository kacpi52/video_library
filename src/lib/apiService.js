const API_LINK = 'http://www.omdbapi.com';
const API_KEY = '2eb14caf';

export const searchByTitle = async (movietitle) => {
  if(typeof movietitle == 'undefined' || movietitle == '' ){
    return {}
  }
  
  let apiConnect = await fetch(`${API_LINK}/?t=${movietitle}&apikey=${API_KEY}`);
  return apiConnect.json();
};