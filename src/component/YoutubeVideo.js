import React from "react";
import YouTube from "react-youtube";
import "../style/body.css";

import { Row, Col, Container, Button } from "react-bootstrap";

class YoutubeVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideoPlayer: props.show
    };
  }
  /*  showVideo = () => {
    this.setState({ showVideo: (this.state.showVideoPlayer = false) });
    console.log(this.state.showVideoPlayer + "funciona");
  }; */

  render() {
    const opts = {
      height: "780",
      width: "1280",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <>
        {this.props.show && (
          <Row
            className={
              this.props.show === true
                ? "popup-video-youtube"
                : "popup-video-youtube-off"
            }
          >
            <div className="container-youtube" onClick={this.props.handleVideo}>
              <Row className="row-section-close">
                <div className="section-close">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                </div>
              </Row>
              <Row>
                <Col xl={12} lg={6}>
                  <YouTube
                    videoId="0Ha3BSCn-qE"
                    opts={opts}
                    onReady={this._onReady}
                  />
                </Col>
              </Row>
            </div>
          </Row>
        )}
      </>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
export default YoutubeVideo;
