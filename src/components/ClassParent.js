import React from "react";
import Child1 from "./ClassChild1";
import Child2 from "./ClassChild2";

class Parent extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent - Constructor");
    }

    componentDidMount() {
        console.log("Parent - componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
          //
        }
        if (this.state.count2 !== prevState.count2) {
          // code
        }
        console.log("Parent Component Did Update " + this.props.name);
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("Parent ComponentWillUnmount");
    }

    render(){
        console.log("Parent - render " + this.props.name);
        return(
            <>
                <h2>This is Parent class Component</h2>
                <Child1 name="Pallavi"/>
                <Child2 name="Radha"/>
            </>
        )
    }
}

export default Parent;