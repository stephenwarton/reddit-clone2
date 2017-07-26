import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormButton from './components/FormButton';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
    super(props);

    this.onAddPost = this.onAddPost.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onAddComment = this.onAddComment.bind(this);

    this.state = {
      filter: '',
      sortOption: 'votes',
      posts: [
        {
          title: 'Where to buy burritos?',
          author: 'Morrison',
          image: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg',
          description: 'Just wondering and pondering.',
          date: Date.now() - 987654321,
          votes: 5,
          comments: ['King Soopers', 'Natural Grocers', 'Burrito Guy']
        }, {
          title: 'What to do?',
          author: 'Bob',
          image: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?h=350&auto=compress&cs=tinysrgb',
          description: 'I have accumulated exactly 99 problematic complications but a female canine is not one of which I speak.',
          date: Date.now() - 123456789 *2,
          votes: 10,
          comments: ['I feel bad you, son.']
        }, {
          title: 'Cool Picture',
          author: 'Jenny',
          image: 'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?h=350&auto=compress&cs=tinysrgb',
          description: 'A picture of me taking a picture of someone taking a picture of me.',
          date: Date.now(),
          votes: 0,
          comments: ['I agree.', 'Hella meta']
        }
      ]
    }
  }

    onAddPost(post) {
      this.setState({
        posts: this.state.posts.concat(post)
      });
    }

    updateVotes(post, option) {
      const index = this.state.posts.findIndex(x => x.title === post.title && x.author === post.author && x.description === post.description && x.votes === post.votes && x.image === post.image);
      this.setState((prevState, props) => {
        if (option === 'add') {
          prevState.posts[index].votes++;
        } else if (option === 'subtract') {
          prevState.posts[index].votes--;
        }
      })
    }

    onAddComment(post, comment) {
      const index = this.state.posts.findIndex(x => x.title === post.title && x.author === post.author && x.description === post.description && x.votes === post.votes && x.image === post.image);
      this.setState((prevState, props) => {
        prevState.posts[index].comments.push(comment);
      })
    }

    handleChange(target) {
      this.setState(prevState => ({sortOption: target.value}));
    }

    onFilter(target) {
      this.setState(prevState => ({filter: target.value}));
    }

  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <FormButton onAddPost={this.onAddPost} sortOption={this.state.sortOption} handleChange={this.handleChange} onFilter={this.onFilter} />
          <Post filter={this.state.filter} sortOption={this.state.sortOption} posts={this.state.posts} updateVotes={this.updateVotes} onAddComment={this.onAddComment} />
        </main>
      </div>
    );
  }
}

export default App;
