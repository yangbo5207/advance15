import React, { Component } from 'react';
import { Link } from 'react-router';
import each from 'lodash/each';
import { navList, navmap } from './config';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';

export default class Index extends Component {
    state = {
        index: 0
    }

    onClick = index => this.setState({
        index
    })

    render() {
        const { index } = this.state;

        const { children, location } = this.props;

        return (
            <div className="advance-main">
                <nav>
                    {navList.map((item, i) => (
                        <Link to={`/${item}`} key={i} className={index === i ? 'active' : null} onClick={this.onClick.bind(null, i)}>
                            { navmap[item] }
                        </Link>
                    ))}
                </nav>

                <div className="advance-pages">
                    <CSSTransitionGroup transitionName="page" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                        {
                            React.cloneElement(children, {
                                key: location.pathname
                            })
                        }
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}
