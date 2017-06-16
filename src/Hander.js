/**
 * Created by changping on 2017/6/16.
 */
import React, {Component} from 'react'
import * as ajax from "react-dom/lib/ReactInstanceMap";

class Clock extends Component {
    constructor () {
        super()
        this.state = {
            date: new Date()
        }
    }

    render () {
        return (
            <div>
                <h1>
                    <p>现在时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }

    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }
}

export default Clock

// class Hand extends Component {
//     constructor() {
//         super()
//         console.log('constructor')
//     }
//
//     componentWillMount() {
//         console.log('componentWillMount')
//     }
//
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <h1>11111</h1>
//             </div>
//         )
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount')
//     }
// }

