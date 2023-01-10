import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Key': 'b01576f4admsh869036a21ffe4e4p194a46jsn30716affca84',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchFromAPI = async (url) => {
  const { data } = await axios(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
}

export default fetchFromAPI;
