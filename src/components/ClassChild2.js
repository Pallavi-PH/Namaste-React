import {Component} from "react";

class Child2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("Child - Constructor " + this.props.name);
    }

    componentDidMount() {
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
        console.log("ComponentWillUnmount");
    }

    render(){
        console.log("Child - render " + this.props.name);
        return(
            <div>
                <h2>This is Child 2</h2>
                <p>Name is {this.props.name}</p>
            </div>
        )
    }
}

export default Child2;