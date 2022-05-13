import axios from 'axios';

const KEY = 'AIzaSyCo5J60nPfhdMyxrnALT6S0z9NOvRYIN7w'; 

export default axios.create({
    // GET https://www.googleapis.com/youtube/v3/search
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key : KEY
    }
});