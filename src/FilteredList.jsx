import React, { Component } from 'react';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'All',
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  onFilter = (event) => {
    this.setState({ type: event.target.value });
  };

  filterItems = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType =
      this.state.type === 'All' || item.type === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItems);

    return (
      <div className="filter-list">
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onSearch}
        />
        <select onChange={this.onFilter}>
          <option value="All">All</option>
          <option value="Fruit">Fruits</option>
          <option value="Vegetable">Vegetables</option>
        </select>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilteredList