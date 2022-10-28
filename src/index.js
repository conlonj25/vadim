import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Parent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 17,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  parentHelper = () => {
    this.handleClick(40);
  }

  handleClick(x) {
    console.log("Called handleClick(" + x + ")");
    this.setState({
      value: x,
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.parentHelper}>Parent Button</button>
        <Child handleClick={this.handleClick}></Child>
      </div>
    );
  }
}

class Child extends React.Component{

  childHelper = () => {
    this.props.handleClick(12);
  }

  render(){
    return(
      <div>
        <button onClick={this.childHelper}>Child Button</button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);