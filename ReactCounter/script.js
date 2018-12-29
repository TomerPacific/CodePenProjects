class Counter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
     this.decrement = this.decrement.bind(this);
     this.reset = this.reset.bind(this);
  } //end constructor
  
  increment() {
    this.setState({
      counter: this.state.counter+1
    });
  }
  
  reset() {
     this.setState({
      counter: 0
    });
  }  
  
  decrement() {
    this.setState({
      counter: this.state.counter-1
    });
  }
  
 render() {
   return(
     <div>
      <h2>{this.state.counter}</h2>
      <button id="inc" onClick={this.increment}>+1</button>
      <button id="dec" onClick={this.decrement}>-1</button>
      <button id="reset" onClick={this.reset}>Reset</button>
     </div>
   );
 }
} //end React Class

ReactDOM.render(<Counter />,
  document.getElementById("root"));