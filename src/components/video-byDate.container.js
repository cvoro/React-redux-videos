import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';



class Display extends Component {

  render() {
    console.log(this.props.error);
      console.log(this.props.videoDate.error);
    if (this.props.videoDate.error){
          var err = 'Internal server error'
    }else if(this.props.videoDate.videoDate.length === 0){
        var error = 'There are no videos for that date'
  }else{
    var vid = this.props.videoDate.videoDate.map((video)=>{
      return(
        <div className="col-xs-6 col-sm-6 col-md-4" key={video.id}>
    <div className="thumbnail">
    <h2>{video.title}</h2>
        <div className="caption">
            <h4>{video.description}</h4>
            <p>Click for description</p>
<p>            <NavLink to={"videos/"+video.id} className="label label-danger">Play video</NavLink></p>
        </div>
        <img src={video.picture} alt="..." />
    </div>
</div>
      )
    })
  }
    return (
      <div className="Display">
        {vid}
        <h1>{error}</h1>
        <h1>{err}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
      videoDate: state.videoDate
    }
}

export default connect(mapStateToProps)(Display);
