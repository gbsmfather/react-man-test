import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    state = {
        hello: 'hello app js!',
        count: 0,
    };

    handleChange = () => {
        this.setState({
            hello: 'bye app js!',
        });
    }

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className="gray-background">
                <img src={logo} lat="logo" alt="logo"/>
                <h2>Let's develop management system!</h2>
            </div>
        );
    }
}
//
// class InsideApp extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.count}
//                 <button onClick={this.props.handleChange}>click Me ! 2</button>
//             </div>
//         )
//     };
// }

export default App;
