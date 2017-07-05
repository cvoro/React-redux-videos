import React, { Component } from 'react';
import {connect} from 'react-redux';
import Child from './home-display.container.js';
import {bindActionCreators} from 'redux';
import {fetchVideos} from '../actions/videoActions';

class Home extends Component {

  componentWillMount(){
   this.props.fetchVideos();
  }

  render() {
    return (
      <div className="Home">
        <Child />
      </div>
    );
  }
}

// Its home bae
// <button onClick={() => this.props.fetchVideos()}>click</button>

function mapStateToProps(state) {
    return{
      videos: state.videos

    }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchVideos: fetchVideos
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Home);
