import axios from 'axios';


const KEY= 'AIzaSyBM6SFqIBeC9WxTdVJ46Zz6FXK1xSZNvRA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        type: 'video',
        regionCode: "US",
        relevanceLanguage: "en",
        key: KEY
    }
});