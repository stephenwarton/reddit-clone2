import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      comment: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clickHandler(e){
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  handleChange(e){
    const target = e.target;
    this.setState((prevState,props) => {
      prevState.comment = target.value
    });
  }

  addComment(e){
    e.preventDefault();
    this.props.onAddComment(this.props.post, this.state.comment);
    this.setState({
      isToggleOn: true,
      comment: ''
    })
  }

  render(){
    let commentsWord = this.props.post.comments.length===1 ? 'comment':'comments';

    return (
    <div>
      <div>
        {timeSince(this.props.post.date)}
        {" | "}
        <i className="glyphicon glyphicon-comment"></i>
        <a onMouseDown={this.clickHandler}>
          {` ${this.props.post.comments.length} ${commentsWord}`}
        </a>
      </div>
      <div className="row">
        <div className="col-md-offset-1">
          <hr />
          {toggleComments(this.props.post.comments, this.state.isToggleOn)}
          {
            this.state.isToggleOn
            ?        <form onSubmit={this.addComment} className="form-inline">
                      <div className="form-group">
                        <input className="form-control" value={this.state.comment} onChange={this.handleChange} placeholder="" required />
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary" />
                      </div>
                    </form>
                    : null
          }
        </div>
      </div>
    </div>
    )
  }
}

function timeSince(date){
    const time = Date.now()-date;
    if(time < 60000){
      return 'a few seconds ago'
    } else if(time < 60000*60){
      const minutes = Math.floor(time/60000);
      const word = minutes===1 ? 'minute':'minutes';
      return `${minutes} ${word} ago`
    } else if(time < 60000*60*24){
      const hours = Math.floor(time/(60000*60));
      const word = hours===1 ? 'hour':'hours';
      return `${hours} ${word} ago`
    } else if(time < 60000*60*24*7){
      const days = Math.floor(time/(60000*60*24));
      const word = days===1 ? 'day':'days';
      return `${days} ${word} ago`
    } else if(time < 60000*60*24*7*30){
      const weeks = Math.floor(time/(60000*60*24*7));
      const word = weeks===1 ? 'week':'weeks';
      return `${weeks} ${word} ago`
    } else if(time < 60000*60*24*7*30*12){
      const months = Math.floor(time/(60000*60*24*7*30));
      const word = months===1 ? 'month':'months';
      return `${months} ${word} ago`
    } else {
      const years = Math.floor(time/(60000*60*24*7*30*12));
      const word = years===1 ? 'year':'years';
      return `${years} ${word} ago`
    }
  }

  function toggleComments(comments, isToggleOn) {
  if (isToggleOn) {
    return (
      comments.map((comment,i) => {
        return  (
          <p key={i}>
            {comment}
          </p>
        )
      })
    )
  }
  return;
}

export default Comment;
