// import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Customer from "./components/Customer";

const customers = [{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '홍길동1',
        'birthday': '760220',
        'gender': '남자',
        'job': '연구원'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홍길동2',
        'birthday': '760220',
        'gender': '남자',
        'job': '연구원'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '홍길동3',
        'birthday': '760220',
        'gender': '남자',
        'job': '연구원'
    }
    ]

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
            <div>
                {
                    customers.map((c) => {
                        return (
                            <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}
                            />
                        );
                    })
                }
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
