import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Comments from '../Comments';
import Animate from '../Animate';
import Buttons from '../Buttons';
import './App.css';

const routers = ['comments', 'animate', 'buttons'];

export default class App extends React.Component {
    state = {
        index: 0
    }

    onClick = index => this.setState({
        index
    })

    render() {

        const { index } = this.state;

        return (
            <Router>
                <div className="wrap">
                    <nav>
                        {routers.map((item, i) => (
                            <Link to={item} className={index === i ? 'active' : null} onClick={this.onClick.bind(null, i)} key={i}>{item}</Link>
                        ))}
                    </nav>

                    <div className="content">
                        <Route exact path="/" component={Comments} />
                        <Route path="/comments" component={Comments} />
                        <Route path="/animate" component={Animate} />
                        <Route path="/buttons" component={Buttons} />
                    </div>
                </div>
            </Router>
        )
    }
}
