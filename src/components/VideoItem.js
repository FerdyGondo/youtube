import './VideoItem.css';

import React from "react";

const VideoList = ({video, onVideoSelectItem}) => {
    return (
    <div onClick={() => onVideoSelectItem(video )} className="video-item item">
        <img className="ui image" 
            alt={video.snippet.thumbnails.medium.url} 
            src={video.snippet.thumbnails.medium.url} 
            /> 
        <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
        </div>
    </div>
    )
};

export default VideoList;