//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: []
  };

  timeoutUpdate = null;

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postResponse, photoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return {...post, cover:photosJson[index].url}
    });

    this.setState({posts: postAndPhotos})
  }

  componentDidUpdate(){
  }

  componentWillUnmount(){
  }

  handleTimeOut = () => {
  }

  render(){

    const {posts} = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title}/>
              <div key={post.id} className = "post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
      
    );
  }
}

export default App;
