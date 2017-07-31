import React, { Component } from 'react';
import Votes from './Votes';
import Comment from './Comment';

class Post extends Component {

  render(){
    let filteredPosts = this.props.posts.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1;
      }
    );
      return(
        <div>
        {sortPosts(filteredPosts, this.props.sortOption).map((post,i) => {
        return (<div key={i} className="row">
          <div className="col-md-12">
              <div className="well">
              <div className="media-left">
                <img className="media-object" alt="" src={post.image} />
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  {post.title+" "}
                  <Votes post={post} updateVotes={this.props.updateVotes} />
                </h4>
                <p className="author">
                  {`by ${post.author}`}
                </p>
                <p>
                  {post.description}
                </p>
                <Comment post={post} onAddComment={this.props.onAddComment} />
              </div>
            </div>


          </div>
        </div>
        )})}
      </div>
      );
    }
  }

  function sortPosts(posts, option){
  if(option==='votes'){
    return posts.sort((a,b) => {
      return b.votes - a.votes
    });
  } else if(option==='date'){
    return posts.sort((a,b) => {
      return b.date - a.date
    });
  } else if(option==='title'){
    return posts.sort((a,b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if ( x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
}

export default Post;
