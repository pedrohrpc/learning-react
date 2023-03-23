//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    count: 0,
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Body 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Body 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Body 3'
      }
    ]
  };

  timeoutUpdate = null;

  componentDidMount(){
    this.handleTimeOut();
  }

  componentDidUpdate(){
    this.handleTimeOut();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const {posts, count} = this.state;
    posts[0].title = 'Titulo mudou'
    
    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, count: count + 1});
    }, 1000)
  }

  render(){

    const {posts, count} = this.state;

    return (
      <div className="App">
        {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} */}
        <h1>{count}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default App;
