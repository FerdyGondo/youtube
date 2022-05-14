import {useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    // const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect( () => {
        onSearch(defaultSearchTerm);
    },[defaultSearchTerm]);

    const onSearch = async term => {
        const res = await youtube.get('/search',{
            params: {
                q: term
            }
         });
         console.log(res);
         setVideos(res.data.items);
        //  setSelectedVideo(res.data.items[0]);
    };
    
    return [videos, onSearch];

};

export default useVideos;