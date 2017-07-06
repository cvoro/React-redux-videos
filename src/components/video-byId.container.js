import React, { Component } from 'react';
import 'react-infinite-calendar/styles.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setToBl} from '../actions/videoActions';

class DisplayVideoId extends Component {

logthis(id){
  console.log(id);
}

  render() {
    console.log(this.props.delVid.deleted);
      console.log(this.props.videoId);
      if(this.props.delVid.deleted == true){
        var del = 'video is deleted'
      }
    else if (this.props.videoId.error){
          var err = 'Internal server error'
    }else if(this.props.videoId.videoId.length === 0){
        var error = 'There are no videos for that date'
  }else{
    var vid = this.props.videoId.videoId.map((video)=>{
      return(
        <div  key={video.id}>
        <h1>{video.title}</h1>
        <video width="720" controls>
    <source src={video.video_720p} type="video/mp4"/>
  </video>
  <p>
  <button onClick={() => this.props.setToBl(video.id)} className="btn btn-danger"> Delete video</button></p>
  <h2>{video.description}</h2>
  </div>
      )
    })

  }

    return (
      <div className="DisplayVideoId">
          {vid}
      <h1>{error}</h1>
      <h1>{err}</h1>
      <h1>{del}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
      videoId: state.videoId,
      delVid: state.delVid

    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setToBl: setToBl
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(DisplayVideoId);
