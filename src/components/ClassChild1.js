import {Component} from "react";

class Child1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("Child - Constructor " + this.props.name);
    }

    componentDidMount() {
        // this.timer = setInterval(() => {
        // console.log("NAMASTE REACT OP ");
        // }, 1000);

        console.log("Child - componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
          //
        }
        if (this.state.count2 !== prevState.count2) {
          // code
        }
        console.log("Component Did Update " + this.props.name);
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("ComponentWillUnmount");
    }

    render(){
        console.log("Child - render " + this.props.name);
        return(
            <div>
                <h2>This is Child 1</h2>
                <p>Name is {this.props.name}</p>
                <p>This is the count: {this.state.count}</p>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Increment Count</button>
            </div>
        )
    }
}

export default Child1;