import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addPost = this.addPost.bind(this);
    this.handleKeyPressOnTitle = this.handleKeyPressOnTitle.bind(this);
    this.handleKeyPressOnBody = this.handleKeyPressOnBody.bind(this);
    this.handleKeyPressOnAuthor = this.handleKeyPressOnAuthor.bind(this);
    this.handleKeyPressOnImage = this.handleKeyPressOnImage.bind(this);

    this.state = {
      post: {
        title: '',
        author: '',
        image: '',
        description: '',
        date: Date.now(),
        votes: 0,
        comments: []
      },
      showTitleError: false,
      showBodyError: false,
      showAuthorError: false,
      showImageError: false
    }
  }

  handleChange(e) {
    const target = e.target;
    this.setState((prevState,props) => {
      prevState.post[target.id] = target.value
    });
  }

  addPost(e) {
    e.preventDefault();
    this.props.onAddPost(this.state.post);
    this.setState({
      post: {
        title: '',
        author: '',
        image: '',
        description: '',
        date: Date.now(),
        votes: 0,
        comments: []
      },
      showTitleError: false,
      showBodyError: false,
      showAuthorError: false,
      showImageError: false
    });
  }

  handleKeyPressOnTitle(e){
    if(e.key === 'Tab' && e.target.value === ''){
      this.setState({
        showTitleError: true
      })
    } else if (e.key === 'Tab'){
      this.setState({
        showTitleError: false
      })
    }
  }

  handleKeyPressOnBody(e){
    if(e.key === 'Tab' && e.target.value === ''){
      this.setState({
        showBodyError: true
      })
    } else if (e.key === 'Tab'){
      this.setState({
        showBodyError: false
      })
    }
  }

  handleKeyPressOnAuthor(e){
    if(e.key === 'Tab' && e.target.value === ''){
      this.setState({
        showAuthorError: true
      })
    } else if (e.key === 'Tab'){
      this.setState({
        showAuthorError: false
      })
    }
  }

  handleKeyPressOnImage(e){
    if(e.key === 'Tab' && e.target.value === ''){
      this.setState({
        showImageError: true
      })
    } else if (e.key === 'Tab'){
      this.setState({
        showImageError: false
      })
    }
  }

  render() {
    const {title, author, image, description} = this.state.post;
    return (
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={this.addPost}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              {
                this.state.showTitleError
                ? <input id="title" className="form-control invalid" onChange={this.handleChange} value={title} placeholder="" onKeyDown={this.handleKeyPressOnTitle} required/>
                : <input id="title" className="form-control" onChange={this.handleChange} value={title} placeholder="" onKeyDown={this.handleKeyPressOnTitle} required/>
              }
            </div>
            <div className="form-group">
              <label htmlFor="description">Body</label>
              {
                this.state.showBodyError
                ? <textarea id="description" className="form-control invalid" onChange={this.handleChange} value={description} placeholder="" onKeyDown={this.handleKeyPressOnBody} required ></textarea>
                : <textarea id="description" className="form-control" onChange={this.handleChange} value={description} placeholder="" onKeyDown={this.handleKeyPressOnBody} required ></textarea>
              }
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              {
                this.state.showAuthorError
                ? <input id="author" className="form-control invalid" onChange={this.handleChange} value={author} placeholder="" onKeyDown={this.handleKeyPressOnAuthor} required />
                : <input id="author" className="form-control" onChange={this.handleChange} value={author} placeholder="" onKeyDown={this.handleKeyPressOnAuthor} required />
              }

            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              {
                this.state.showImageError
                ? <input id="image" className="form-control invalid" onChange={this.handleChange} value={image} placeholder="" onKeyDown={this.handleKeyPressOnImage} required />
                : <input id="image" className="form-control" onChange={this.handleChange} value={image} placeholder="" onKeyDown={this.handleKeyPressOnImage} required />
              }
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create Post
              </button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default Form;
