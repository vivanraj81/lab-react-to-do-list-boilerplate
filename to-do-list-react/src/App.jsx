import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inp: '',
      newinput: [],
    };
    this.onChange_input = this.onChange_input.bind(this);
  }

  onChange_input(e) {
    this.setState(() => {
      return {
        inp: e.target.value,
        newinput: this.state.newinput,
      };
    });
  }

  create = () => {
    if (this.state.inp === '') {
      return;
    }
    let old_value = this.state.inp;
    let old_input = this.state.newinput.slice();
    old_input.push(old_value);
    this.setState(() => {
      return {
        inp: '',
        newinput: old_input,
      };
    });
  };

  update = (e, ind) => {
    let old_input_array = [...this.state.newinput];
    old_input_array[ind] = e.target.value;
    this.setState(() => {
      return {
        inp: '',
        newinput: old_input_array,
      };
    });
  };

  delete = (ind) => {
    let old_input_array = [...this.state.newinput];
    old_input_array.splice(ind, 1);
    this.setState(() => {
      return {
        newinput: old_input_array,
      };
    });
  };

  render() {
    return (
      <>
      <div className='container'>
        <input
          placeholder="Type here"
          value={this.state.inp}
          onChange={this.onChange_input}
        ></input>
        <button onClick={this.create}>Add Item</button>
        <br />
        {this.state.inp}
        <br />
        {this.state.newinput &&
          this.state.newinput.map((item, ind) => {
            return (
              <>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => this.update(e, ind)}
                />
                <button onClick={() => this.delete(ind)}>Delete</button>
                <br />
              </>
            );
          })}
        <br />
        </div>
      </>
    );
  }
}

export default App;
