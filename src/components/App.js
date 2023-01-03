import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import comment from "../apis/comment";
import CommentList from "./CommmentList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, commentsList: [], comment: null};

  componentDidMount() {
    this.onTermSubmit('nat geo');
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });

    this.getComments();
  };

  getComments = async () => {
    const response = await comment.get("", {
      params: {
        videoId: this.state.selectedVideo.id.videoId,
      },
    });
    console.log(response);

    this.setState({
      comment: response.data.items[0],
      commentsList: response.data.items,
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              <CommentList comment={this.state.commentsList}/>
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
