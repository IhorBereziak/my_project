import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const {Fragment} = React;
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [
                {title: 'Ihor', date: '01.02.1995', text: 'ggggggggggggg', id: 1},
                {title: 'Vita', date: '20.12.1990', text: 'ggggggggggggg', id: 2},
                {title: 'Ivan', date: '15.10.1988', text: 'ggggggggggggg', id: 3},
                {title: 'Petro', date: '20.07.1991', text: 'ggggggggggggg', id: 4}
            ]
        }
    }

    createTitleList = () => {
        return this.state.post.map(user => (
            <div>
                <div>{user.title}</div>
                <button onClick={this.showPost}>Open post!!!</button>
            </div>
        ));
    };
    showPost = (id) => {
       console.log(1);
    };

        render(){
            return (
                <Fragment>
                    <div>{this.createTitleList()}</div>

                </Fragment>
            );
        }
    }

    ReactDOM.render(<Posts/>, document.getElementById('root'));