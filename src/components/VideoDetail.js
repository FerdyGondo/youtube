import React from "react";

const VideoDetail = ({video}) => {

    const videoSrc = video ? `https://www.youtube.com/embed/${video.id.videoId}`:'';

    return(
        <div>
            {video ? 
                <>
                    <div className="ui embed">
                        <iframe title="video player" src={videoSrc} />
                    </div>
                <div className="segment">
                    <h4 className="header">
                        {video.snippet.title}
                        {/* {video ? video.snippet.title : 'Loading'} */}
                    </h4>
                    <p>
                        {video.snippet.description}
                        {/* {video ? video.snippet.description : 'Loading'} */}
                    </p>
                </div>
                </>
            :
            <div>
                Loading
            </div>}
        </div>
    )
};

export default VideoDetail;