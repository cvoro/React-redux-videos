import React, { Component } from 'react';
import 'react-infinite-calendar/styles.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {videoById} from '../actions/videoById';
import DisplayVideoId from './video-byId.container.js';


class PlayVideo extends Component {

  componentWillMount(){
    this.props.videoById(this.props.match.params.id)
  }

  render() {
    return (
      <div className="PlayVideo">
<DisplayVideoId />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
      videoId: state.videoId
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    videoById: videoById
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(PlayVideo);
