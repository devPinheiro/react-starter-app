import React, { Component } from 'react'

export default class App extends Component {
    state = {
        counter: 0
    }
    render() {
        debugger
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <h1 onClick={() => this.setState( state => ({ counter: state.counter + 1}))
                }
                >React Starter App</h1>
                
            </div>
           
        )
    }
}
