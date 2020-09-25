import axios from 'axios'; // used to make API requests

const url = "https://covid19.mathdro.id/api"

// function to get data
export const fetchData = async () => {
  // try and catch block- try if fetch is successful, otherwise error 
  try {
    const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
    // get only parts of data we need
    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error){

  }
}
// import then call function in app.js

