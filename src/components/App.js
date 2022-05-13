import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, onSearch] = useVideos('react JS');

    //  setSelectedVideo(res.data.items[0]);
    useEffect( () => {
        setSelectedVideo(videos[0]);
    }, [videos]);

/* 
    useEffect( () => {
        onTermSubmit('car');
    },[]);
     */
/* 
    const onTermSubmit = async term => {
        const res = await youtube.get('/search',{
            params: {
                q: term
            }
         });
         console.log(res);
         setVideos(res.data.items);
         setSelectedVideo(res.data.items[0]);
    };
 */
    // const  onVideoSelected = video => {
    //     console.log('selected', video);
    //     setSelectedVideo(video);
    // };

    return(
        <div className="ui container">
            {/* <SearchBar onFormSubmit={onTermSubmit}/> */}
            <SearchBar onFormSubmit={onSearch}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        {/* <VideoList onVideoSelect={onVideoSelected} videos={videos} /> */}
                        {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} /> */}
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )

};
/* 
class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('car');
    };

    onTermSubmit = async term => {
        const res = await youtube.get('/search',{
            params: {
                q: term
            }
         });
         console.log(res);
         this.setState({ 
             videos: res.data.items,
            selectedVideo: res.data.items[0]
         });
    };

    onVideoSelected = video => {
        console.log('selected', video);
        this.setState({selectedVideo:video});
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelected} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
 */
export default App;