import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import format from 'date-fns/format';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {videoByDate} from '../actions/videoIdActions';
import Display from './video-byDate.container';

class About extends Component {

  componentWillMount(){
    const today = new Date();
// const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
this.props.videoByDate(this.today)
  }

  componentDidMount(){
    this.props.videoByDate(this.today)
  }

  render() {
    return (
      <div className="About">
      <div className="pull-left  col-sm-8">
      <Display />
      </div>
<div className="pull-right">
      <InfiniteCalendar
      onSelect={(date)=>{
        var dat = format(date, 'YYYY-MM-DD')
        this.props.videoByDate(dat)
        console.log(this.today);
        console.log(this.props.videoDate)
}}
         width={300}
         height={500}
         selected={this.today}
         minDate={this.lastWeek}
       />
       </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
      videoDate: state.videoDate

    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    videoByDate: videoByDate
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(About);
