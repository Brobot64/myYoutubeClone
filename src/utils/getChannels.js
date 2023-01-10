import axios from "axios";

const getChannelsDetails = async (chanId) => {
  const { data } = await axios({
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/channels',
    params: { part: 'snippet,statistics', id: `${chanId}` },
    headers: {
      'X-RapidAPI-Key': 'b01576f4admsh869036a21ffe4e4p194a46jsn30716affca84',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  })
  // console.log('=====Get Channel Details=======\n', data);
  return data;
}

export default getChannelsDetails;