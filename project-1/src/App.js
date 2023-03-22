import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    name: 'Pedro Procópio',
    count: 0
  };


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'Pedro Procópio',
  //     count: 0
  //   };
  // }

  handlePClick = () => {
    this.setState({name: 'Pedro'});
  }

  handleAclick = (event) => {
    event.preventDefault();
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render(){

    // const name = this.state.name;
    const {name} = this.state;
    const {count} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {count}
          </p>
          <a
            onClick={this.handleAclick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
