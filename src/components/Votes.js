import React, { Component } from 'react';

class Votes extends Component{
      constructor(props) {
        super(props);
        this.state = {props};

        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
      }

      clickHandler(e){
        console.log(this.props.post);
      }

      upVote(e){
        e.preventDefault();
        this.props.updateVotes(this.props.post, 'add');
      }

      downVote(e){
        e.preventDefault();
        if(this.props.post.votes > 0){
          this.props.updateVotes(this.props.post, 'subtract');
        }
      }
      render(){
      return (
        <span>
          |
          <a onMouseDown={this.upVote}><i className="glyphicon glyphicon-arrow-up"></i></a>
          <a onMouseDown={this.downVote}><i className="glyphicon glyphicon-arrow-down"></i></a>
          {this.props.post.votes}
          <span className="pull-right"><a onClick={this.clickHandler} className="btn btn-link text-right">Edit Post</a></span>
        </span>
      )
    }
  }

export default Votes;
