import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { navList, navmap } from './config';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';

class Index extends Component {

    render() {
        const { children, location } = this.props;
        const cur = location.pathname.slice(1);
        console.log(this.props);

        return (
            <div className="advance-main">
                <nav>
                    {navList.map((item, i) => (
                        <Link to={`/${item}`} key={i} className={cur === item ? 'active' : null}>
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

export default withRouter(Index);
