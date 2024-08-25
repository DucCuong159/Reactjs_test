import React from "react";

class ClassComponent extends React.Component {
  state = {
    name: "Cuong",
    age: 23,
  };

  handleEventChange(e) {
    return this.setState({ ...this.state, name: e.target.value });
  }

  handleClick = () => {
    alert("Hello");
  }

  render() {
    return (
      <>
        <div className="first"><input type="text" onChange={(e) => this.handleEventChange(e)} value={this.state.name}/></div>
        <div className="second"><h1>Hello, {this.state.name} {this.state.age}!</h1></div>
        <div className="third"><button onClick={() => this.handleClick()}>On Click</button></div>
      </>
    );
  }
}

export default ClassComponent;
