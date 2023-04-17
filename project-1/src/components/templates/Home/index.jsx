//import logo from './logo.svg';
import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../../utils/load-posts';
import { Posts } from '../../Posts';
import { Button } from '../../Button';

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };

  timeoutUpdate = null;

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state;
    const postAndPhotos = await loadPosts
    this.setState({
      posts: Array.from(postAndPhotos).slice(page,postsPerPage),
      allPosts: postAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = Array.from(allPosts).slice(nextPage, nextPage+postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage})

    console.log('Carregando pagina')
    
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
        <Posts posts={posts}/>
        <Button text='Load More Posts' onClick={this.loadMorePosts}/>
      </section>
      
    );
  }
}

export default Home;
