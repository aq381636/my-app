import React, { Component } from 'react';
import FilteredList from './FilteredList';

const produce = [
  { name: 'Apple', type: 'Fruit' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;