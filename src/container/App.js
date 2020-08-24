import React from 'react';
import './App.css';
import CardList from '../component/CardList';
import { robots } from '../robots';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      SearchField: "",
      robots: robots
    }
  }

  onInputChange = (event) => {
    this.setState({ SearchField: event.target.value })
  } 

  render() {
    // console.log(this.state.SearchField)
    const filteredRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
    })
  return (
    <div className="App">
      <h1 className='f1 light-blue'>ROBOFRIENDS</h1>
      <div className='pa2'>
      <input
      type='text'
      placeholder='Search Friends'
      className='pa3 ba b--green bg-lightest-blue'
      onChange={ this.onInputChange }/>
      </div>
      <CardList robots={ filteredRobots  } />
    </div>
  );
  }
}

export default App;
