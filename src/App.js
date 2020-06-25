import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/ghostpost/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({posts: data})
    })
  }

  handleLikes(props) {
    console.log(props)
  }

  render() {
    return (
      <div className="App">
        <h1>Qu33n B's Spilling the Tea!!</h1>
        {this.state.posts.map((post) => {
          console.log(post)
          return <li key={post.id}> {post.post}
          <br/> {}
          {post.boast_or_roast
          ? <p>Roast</p>
          : <p>Boast</p>
      }
            <button><span role='img' aria-label='likes'>👍</span></button> {post.up_votes}
            <button><span role='img' aria-label='dislikes'>👎</span></button> {post.down_votes}
            <p>{post.total_votes}</p>
            {post.submission_time}
          </li>
        })}
      </div>
    );
  }
}

export default App;
