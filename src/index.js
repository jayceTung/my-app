import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LikeButton from "./js/LikeButton"
import CommentApp from "./js/CommentApp"
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Hand from "./Hander";
import Clock from "./Hander";

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

var names = ['Bob', 'Tom', 'Mike'];
var arr = [
    <h1>hello</h1>,
    <h1>welcome</h1>
];

var HelloMessage = React.createClass({
    render: function () {
        return <h1>hello {this.props.name}</h1>;
    }
});

var MyTitle = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return <h1>{this.props.title}</h1>
    }
});


var NotesList = React.createClass({
    render: function () {
        return <ul>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>
                    })
                }
            </ul>;
    }
});

// ReactDOM.render(
//     <div>
//         {
//             // names.map((name, index) => {
//             //     return <div> 第{index}个是{name}</div>
//             // })
//
//
//             // arr
//         }
//     </div>,
//     document.getElementById('root')
// );

 // ReactDOM.render(
 //     <NotesList>
 //         <span>hello</span>
 //         <span>world</span>
 //     </NotesList>,
 //     document.getElementById('root')
 // );
 // var data = 123;
 // ReactDOM.render(
 //     <MyTitle title={data}/>,
 //     document.body
 // );

class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }

    handleShowAndHide () {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
               <div>
                   {this.state.isShow ? <Clock/> : null}
                   <button
                       onClick={this.handleShowAndHide.bind(this)}>
                       submit
                   </button>
               </div>
            </div>
        )
    }
}


 ReactDOM.render(<Index />, document.body);