import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <h4 className="ui segment">{video.snippet.description}</h4>
            <div className="ui segment">{video.snippet.title}</div>
        </div>
    )
}

export default VideoDetail;