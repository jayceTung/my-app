import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LikeButton from "./js/LikeButton"
import CommentApp from "./js/CommentApp"
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

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
 var data = 123;
 // ReactDOM.render(
 //     <MyTitle title={data}/>,
 //     document.getElementById('root')
 // );

class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton/>
            </div>
        )
    }
}


 ReactDOM.render(<CommentApp />, document.body);