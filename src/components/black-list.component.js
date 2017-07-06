import React, { Component } from 'react';
import {connect} from 'react-redux';
import thun from './thun.css';
import { NavLink } from 'react-router-dom';



class BlackList extends Component {

  render() {
    var vid = this.props.videos.videos.map((video)=>{
      return(
        <div className="col-xs-6 col-sm-6 col-md-4" key={video.id}>

    <div className="thumbnail">
    <h2>{video.title}</h2>
        <div className="caption">
            <h4>{video.description}</h4>
            <p>Click for description</p>
<p>            <NavLink to={"play/"+video.id} className="label label-danger">Play video</NavLink></p>
        </div>
        <img src={video.picture} alt="..." />
    </div>
</div>

      )
    })

    return (
      <div className="BlackList">
      <div className="row">
      {vid}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
      delVid: state.delVid
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setToBl: setToBl
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(BlackList);
