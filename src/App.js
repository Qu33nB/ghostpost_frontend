import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }

  // http://127.0.0.1:8000/api/ghostpost/

  render() {
    return (
      <div className="App">
        <h1>Qu33n B's Spilling the Tea!!</h1>
        {this.state.posts.map((post) => {
          return <li> {post.post}
            <br/> {post.boast_or_roast} 
            <button>👍</button> {post.up_votes}
            <button>👎</button> {post.down_votes}
            {post.total_votes}
            {post.submission_time}
          </li>
        })}
      </div>
    );
  }
}

export default App;
