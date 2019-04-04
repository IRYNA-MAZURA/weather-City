import React from 'react';

const data = ['Paris', 'Minsk', 'London', 'New York', 'Los Angeles'];

class SelectCity extends React.Component {
  
  
    state = {
      selectedOption: null,
    };
  

  selCity = (event) => {
  //this.setState({selectedOption: event.target.value});
  this.setState((event) => {
    return { selectedOption: event.target.value};
   });

  debugger
  console.log('----------', this);
  console.log('Option selected:', this.selectedOption);
  };

  render() {
 const { selectedOption } = this.state;

    return (
      <div>
        <select onChange={this.selCity} value={this.state.value}>
        <option>Выберите город</option>
          {data.map(elem => (
            <option key={elem} value={elem}>{elem}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectCity;