import './App.css';
import React, {Component} from 'react'
import NavBar from './component/nav_bar/NavBar';
import LinkList from './component/LinkList/LinkList';
class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return ( 
      <div>
        <NavBar />
        <button>create</button>
        <LinkList />
      </div>
     );
  }
}
 
export default App;
